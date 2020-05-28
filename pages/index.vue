<template>
  <div class="input-select">
    <select v-model="source">
      <option
        v-for="option in options" 
        :value="option.value" 
        :key="option.id"
      >
        {{ option.text }}
      </option>
    </select>

    <button class="input-reverse" @click="revertLang">&#8594;</button>

    <select v-model="target">
      <option
        v-for="option in options" 
        :value="option.value" 
        :key="option.id"
      >
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
      { text: 'Deutsch', value: 'de' },
      { text: 'French', value: 'fr' },
      { text: 'Slovak', value: 'sk' }
    ]
    }
  },

  methods: {
    revertLang() {
      let aux = this.source
      this.source = this.target
      this.target = aux
    }
  }
}
</script>

<style>
.input-select {
  width: 100%;
  height: 40px;
}

.input-select select {
  outline: none;
  font-size: 14px;
  width: 43%;
  justify-content: space-between;
}

.input-reverse {
  font-size: 20px;
  font-weight: bold;
  background-color: transparent !important;
  border: none;
  width: 25px;
  padding: 0;
}
</style>