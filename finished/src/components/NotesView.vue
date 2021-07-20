<template>
  <div>
      <v-row>
        <v-col>
          <label for="note_title">Note Title</label>
          <br />
          <input placeholder="Enter Title" id="note_title" v-model="noteTitle" type="text">
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="note_description">Note Description</label>
          <br />
          <textarea id="note_description" v-model="noteDescription" placeholder="Enter Note Description" class="form-control"></textarea>
        </v-col>
      </v-row>
      <v-col>
        <v-btn flat color="secondary" @click="addNote(noteTitle, noteDescription, notes)">Add</v-btn>
      </v-col>

    <v-row>
      <v-col cols="3" v-for="note in notes" :key="note.id">
        <v-theme-provider theme="dark">
          <NoteCard
            @remove="removeNote"
            :note="note"
          />
        </v-theme-provider>
      </v-col>
    </v-row>
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
