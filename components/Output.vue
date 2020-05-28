<template>
  <div class="output-container">
    <textarea 
      v-model="content.output"
      v-if="content !== ''"
      class="output-text"
      readonly
      title="Textarea for text translated"
    />
    
    <button 
      @click="copyContentToClipBoard"
      v-if="content !== ''"
      class="output-copy">
        <span v-if="show">Copy to clipboard</span>
        <span v-else>Copied &#10003;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Output",

  data() {
    return {
      show: true
    }
  },

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
      this.show = false
      this.showText()
    },

    showText() {
      setTimeout(() => this.show = true, 800)
    }
  }
}
</script>

<style>
.output-container {
  display: grid;
}
.output-text {
  width: 100%;
  height: 50px;
  outline: none;
  resize: none;
  border-radius: 5px;
  border: none;
}

.output-copy {
  background-color: #16B3AF;
  color: #FFF;
  border-radius: 2px;
  border: none;
  width: 60%;
  height: 30px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 5px;
  transition: all .2s ease-in-out;
}

.output-copy:hover {
  background-color: rgb(28, 150, 146);
}
</style>