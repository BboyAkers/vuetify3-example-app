<template>
  <v-card 
    density="comfortable"
    elevation="6"
  >
    <v-card-item>
      <v-card-header>
        <v-card-header-text>
          <v-card-title>{{ fancyTitleQuotes }}</v-card-title>
        </v-card-header-text>
      </v-card-header>

    <v-card-text>{{ descriptionTruncated }}</v-card-text>
    <v-card-actions>
      <v-btn flat color="error" @click="$emit('remove',note.id)">Remove</v-btn>
    </v-card-actions>
    </v-card-item>
  </v-card>
</template>
<script>
import * as vue from 'vue'
import helperMethods from '../use/helper';
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const descriptionTruncated = vue.computed(() => {
      return helperMethods.truncateText(props.note.description)
    })
    const fancyTitleQuotes = vue.computed(() => {
      return helperMethods.fancyQuotes(props.note.title)
    })
  return { descriptionTruncated, fancyTitleQuotes }
  }
}
</script>
