import { defineStore } from 'pinia'
import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

import { firestore } from '@/firebase'

import { Note } from '@/types/note'

export const useNotesStore = defineStore('notes', {
    state: () => {
        return {
            notes: <Note[]>[],
            loadingNote: <Boolean>true
        }
    },
    actions: {
        async fetchNotes() {
            try {
                const notesSnapshot = await getDocs(collection(firestore, 'notes'))
                const notesData = notesSnapshot.docs.map((doc) => {
                    return doc.data()
                })
                this.notes = await Promise.all(notesData) as Note[]
            } catch(e: any) {
                throw new Error(e.message)
            }
        },

        async fetchNoteById(id: string) {
            try {
                this.loadingNote = true
                const noteSnap = await getDoc(doc(firestore, 'notes', id))
                if (noteSnap.exists()) {
                    const noteData = await noteSnap.data()
                    return noteData as Note
                }
                else {
                    return null
                }
            } catch(e: any) {
                throw new Error(e.message)
            } finally {
                this.loadingNote = false
            }
        },

        async createNote(noteDescription: string) {
            try {
                const id:string = uuidv4()
                const noteData = {
                    id,
                    description: noteDescription
                }
                await setDoc(doc(firestore, 'notes', id), noteData)
                this.notes.push(noteData)
            } catch (e: any) {
                throw new Error(e.message)
            }
        },

        async updateNote(note: Note) {
            try {
                await updateDoc(doc(firestore, 'notes', note.id), note)
            } catch (e: any) {
                throw new Error(e.message)
            }
        }
    }
})