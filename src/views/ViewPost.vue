<template>
  <div class="home">
    <b-container v-if="post">
      <h1>Title: {{ post.title }}</h1>
      <p>Body: {{ post.body }}</p>
      <p>UserId: {{ post.userId }}</p>
    </b-container>
  <b-container>
    <div style="text-align:right">
      <router-link :to="`/posts/${$route.params.id}/edit`">Edit</router-link> | <a @click.prevent="deletePost($route.params.id)" href="#">Delete</a>
    </div>
  </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'post'
    ])
  },
  methods: {
    deletePost (postId) {
      this.$store.dispatch('deletePost', postId).then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.$store.dispatch('getPost', this.$route.params.id)
  }
}
</script>
