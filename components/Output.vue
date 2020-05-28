<template>
  <div>
    <textarea v-model="content.output" v-if="content !== ''"/>
  </div>
</template>

<script>
export default {
  name: "Output",

  props: {
    content: {
      type: String,
      required: true,
      default: () => ''
    }
  }
}
</script>

<style>

</style>