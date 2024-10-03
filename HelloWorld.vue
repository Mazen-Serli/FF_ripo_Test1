<script setup lang="ts">
import { defineProps } from 'vue';
import { useToast } from "primevue/usetoast";
import useCounter from '../Composables/useCounter.ts';

defineProps<{ msg: string }>()

const counterComposable = useCounter();
const toast = useToast();

function showToast() {
  toast.add({ severity: 'info', summary: 'Infos', detail: 'some toast tests', life: 1000, closable: false });
}
</script>

<template>
  <Toast />
  <h1>{{ msg }}</h1>

  <div class="card">
    <h5>Counter</h5>
    <button type="button" @click="counterComposable.increment();"> Increment </button>
    <button type="button" @click="counterComposable.decrement()"> Decrement </button>
    <button type="button" @click="counterComposable.reset()"> Reset </button>
    <p>
      count is {{ counterComposable.counter }}
    </p>
    <p>
      The double of the count is
      {{ counterComposable.double}}
    </p>
    <h5>Toast</h5>
    <button type="button" @click="showToast()"> Show Toast </button>

    <h5> HMR </h5>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>

  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.card h5 {
  margin-top: 0;
  font-size: 1.25em;
  text-decoration: underline;
}

.card button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  margin: 0 12px 12px 0;
}

.card button:hover {
  background-color: #0056b3;
}

.card p {
  margin: 8px 0;
}
</style>