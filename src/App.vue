<script setup lang="ts">
import {ipcRenderer} from 'electron'
import {ref} from 'vue'

const text = ref('')
const btn = ()=>{
  //alert('dsad')
  //ipcRenderer.send("salvarTexto", text.value)
  ipcRenderer.invoke('testeReceber',{texto: text.value}).then((response)=>{
    text.value = response

  })

}

</script>

<template>
  <div>

    <input type="text" v-on:keyup="btn" v-model="text">
  <button @click="btn">dsadsa</button>

  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
