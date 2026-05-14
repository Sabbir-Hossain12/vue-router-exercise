<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="flex">
    <div class="">
      <sidebar></sidebar>
    </div>

    <div>
      <router-view></router-view>
    </div>
    <div>
      <router-view name="test"></router-view>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 4rem;
}
</style>
