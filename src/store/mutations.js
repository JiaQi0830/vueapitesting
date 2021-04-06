export default {
  SET_POSTS: (state, posts) => {
    state.posts = posts
    console.log(state.posts)
  },
  SET_POST: (state, post) => {
    state.post = post
    console.log(state.post)
  },
  DELETE_POST: (state, postId) => {
    const posts = state.posts.filter(v => v.id !== +postId)
    state.posts = posts
    console.log(state.posts)
  },
  UPDATE_POST: (state, newPost) => {
    state.post = newPost
  },
  CREATE_POST: (state, newPost) => {
    state.posts.push(newPost)
    console.log(state.posts)
  }
}
