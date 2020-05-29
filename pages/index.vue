<template>
  <div class="input-select">
    <h2 class="title">Translate app</h2>
    <select v-model="source">
      <option disabled value="">Please select one language</option>
      <option
        v-for="option in options" 
        :value="option.value" 
        :key="option.id"
      >
        {{ option.text }}
      </option>
    </select>
    <span class="icon_select">
      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
        <path d="M0-.75h24v24H0z" fill="none"/>
      </svg>
    </span>

    <button class="input-reverse" @click="revertLang">&#8594;</button>

    <select v-model="target">
      <option disabled value="">Please select one language</option>
      <option
        v-for="option in options" 
        :value="option.value" 
        :key="option.id"
      >
        {{ option.text }}
      </option>
    </select>
    <span class="icon_select icon-2">
      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
        <path d="M0-.75h24v24H0z" fill="none"/>
      </svg>
    </span>

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
.title {
  font-weight: 500;
  text-align: center;
  font-family: sans-serif;
}

.input-select {
  width: 100%;
  height: 40px;
}

.input-select select {
  outline: none;
  font-size: 14px;
  width: 43%;
  justify-content: space-between;
  box-shadow: 1px 4px 10px -2px rgba(0, 0, 0, 0.2);
  background: #FFF;
  -webkit-appearance: none !important;
  height: 23px;
  padding-left: 5px;
  margin-left: 3px;
}

.icon_select {
  position: absolute;
  font-size: 16px;
  height: 22px;
  transition: all 275ms;
  left: 36%;
  bottom: 57px;
}

.icon-2 {
  left: 87%;
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