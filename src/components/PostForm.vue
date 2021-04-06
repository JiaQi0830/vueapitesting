<template>
  <b-form>
    <b-form-group
      id="input-group-1"
      label="Title:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="form.title"
        type="text"
        placeholder="Enter title"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Post Body:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.body"
        placeholder="Enter body"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="User Id:" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.userId"
        type="number"
        placeholder="Enter your user id"
        required
      ></b-form-input>
    </b-form-group>

    <b-button @click.prevent="onSubmit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default ({
  props: {
    form: Object,
    onSubmit: Function
  }
})
</script>
