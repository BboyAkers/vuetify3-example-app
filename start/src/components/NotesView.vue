<template>
  <div>
      <div class="row">
        <div class="form-floating col-4">
          <input placeholder="Enter Title" id="note_title" v-model="noteTitle" type="text" class="form-control">
          <label for="note_title">Note Title</label>
        </div>
      </div>
      <div class="row">
        <div class="form-floating col-4 mt-4">
          <textarea id="note_description" v-model="noteDescription" placeholder="Enter Note Description" class="form-control"></textarea>
          <label for="note_description">Note Description</label>
        </div>
      </div>
      <div class="col">
        <button class="btn btn-success mt-2" @click="addNote(noteTitle, noteDescription, notes)">Add</button>
      </div>

    <div class="row">
      <div v-for="note in notes" :key="note.id" class="col-4 mt-5">
        <NoteCard
          @remove="removeNote"
          :note="note"
        />
      </div>
    </div>
  </div>
</template>

<script>

import * as vue from 'vue'

import NoteCard from './NoteCard'

import { useNotes } from '../use/notes'

export default {
  components: {
    NoteCard
  },
  setup() {
    const noteTitle = vue.ref('')
    const noteDescription = vue.ref('')

    const { 
      add: addNote,
      remove: removeNote,
      notesArray: notes,
    } = useNotes()
    
    return { notes, noteTitle, noteDescription, addNote, removeNote }
  }
}
</script>
