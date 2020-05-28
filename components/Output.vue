<template>
  <div>
    <textarea v-model="content.output" v-if="content !== ''"/>
    <button @click="copyContentToClipBoard">Copy to clipboard</button>
  </div>
</template>

<script>
export default {
  name: "Output",

  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  methods: {
    copyContentToClipBoard() {
      const el = document.createElement('textarea')

      el.value = this.content.output
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style>

</style>