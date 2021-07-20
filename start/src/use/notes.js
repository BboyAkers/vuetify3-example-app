import * as vue from 'vue'

const BASE_NOTE = {
  id: 0,
  title: '',
  content: ''
}

export function useNotes(initial = []) {
  const notes = vue.ref(new Map)
  // get the highest id in our initial set
  let id = Math.max(0, ...initial.map(item => item.id || 0))

  for (const note of initial) {
    // use existing note id, otherwise use our automatic id incremented by 1
    const noteId = note.id || ++id

    notes.value.set(noteId, {
      ...BASE_NOTE,
      ...note,
      id: noteId
    })
  }

  return {
    notes: vue.readonly(notes),
    notesArray: vue.computed(() => [...notes.value.values()]),
    add,
    remove
  }

  function add(title, description) {
    const newNote = {
      id: ++id,
      title,
      description
    }

    notes.value.set(newNote.id, newNote)
  }

  function remove(id) {
    notes.value.delete(id)
  }

}
