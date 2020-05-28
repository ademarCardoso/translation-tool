<template>
  <div>
    <textarea 
      v-model="textToTranslate"
      class="input-text"
      title="Textarea for iput text to translate"
    />

    <Output :content="translatedText"/>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import translator from '../service/index'
import Output from '../components/Output'

export default {
  name: "Input",

  components: {
    Output
  },

  props: {
    from: {
      type: String,
      required: true,
      default: () => ''
    },
    to: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  data() {
    return {
      textToTranslate: '',
      translatedText: ''
    }
  },

  watch: {
    textToTranslate: debounce(async function () {
      if (this.textToTranslate !== '') {
        this.translatedText = await translator(this.textToTranslate, this.from, this.to)
        console.log(this.translatedText)
      }
    }, 400)
  }
}
</script>

<style>
.input-text {
  width: 100%;
  height: 50px;
  outline: none;
  resize: none;
  border-radius: 5px;
  border: none;
  padding: 3px;
  margin-top: 5px;
}
</style>