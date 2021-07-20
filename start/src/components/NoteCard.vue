<template>
<div class="card bg-light" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ fancyTitleQuotes }}</h5>
    <p class="card-text">{{ descriptionTruncated }}</p>
    <button class="btn btn-danger" @click="$emit('remove',note.id)">Remove</button>
  </div>
</div>
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
