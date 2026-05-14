<script setup>
import {ref} from "vue";
import {watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const category = ref(route.params.category);

watch(() => route.params.category,
    (newId, oldId) => {
      category.value = newId;
    }
) //To react to params changes in the same component, you can simply watch anything on the route object, in this scenario, the route.params:
</script>

<template>
  <div id="contact" class="page">
    <h1>Contact Page 1</h1>
    <p>Get in touch with us here.</p>
    {{ category}}
  </div>

</template>

<style scoped>

</style>