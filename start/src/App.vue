<template>
  <div class="container">
    <h2>Add a Note</h2>
    <NotesView />
  </div>
</template>

<script>
import NotesView from './components/NotesView';
export default {
  name: 'App',
  components: {
    NotesView
  }
}
</script>
