<template>
  <v-app>
    <v-main>
      <v-container>
        <NotesView/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NotesView from './components/NotesView';

export default {
  name: 'App',

  components: {
    NotesView
  },

  data: () => ({
    //
  }),
}
</script>
