<template>
  <div class="hello">
    <b-table :fields="fields" striped hover :items="posts">
      <template #cell(id)="data">
        <router-link :to="`/posts/${data.value}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      fields: [
        'userId',
        'id',
        'title',
        'body'
      ]
    }
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>
