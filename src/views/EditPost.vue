<template>
  <div class="home">
    <post-form
    :form="form"
    :onSubmit="onSubmit">
    </post-form>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'

export default {
  components: {
    PostForm
  },
  data () {
    return {
      form: {
        title: '',
        body: '',
        userId: null
      }
    }
  },
  methods: {
    async onSubmit () {
      const payload = {
        postId: this.$route.params.id,
        form: this.form
      }
      await this.$store.dispatch('updatePost', payload)
      this.$router.back()
    }
  }
}
</script>
