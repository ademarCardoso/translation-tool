<template>
  <div>
    <h1>Content translate</h1>
    <select v-model="source">
      <option v-for="option in options" v-bind:value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>
    <select v-model="target">
      <option v-for="option in options" v-bind:value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>

    <Input :from="source" :to="target" />
  </div>
</template>

<script>
import translate from '../service/index'
import Input from '../components/Input'

export default {
  components: {
    Input
  },

  data() {
    return {
      source: 'English',
      target: 'Deutsch',
      options: [
      { text: 'Portuguese', value: 'pt' },
      { text: 'English', value: 'en' },
      { text: 'Russian', value: 'ru' },
      { text: 'Deutsch', value: 'de' }
    ]
    }
  },

  computed: {
    translateTo() {
      retu
    }
  },

  methods: {
    async loadUserInfo() {
      // this.pimba = await translate("Um gato", "pt", "en")
      // console.log(this.pimba)
    },
  }
}
</script>