<template>
  <nav>
    <router-link to="/">Таблица</router-link>
    <router-link to="/chart">График</router-link>
  </nav>
  <h1>Тестовое задание</h1>
  <router-view/>
</template>


<script setup lang="ts">

</script>

<style lang="scss" scoped>
h1{
  text-align: center;
}
nav{
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  *{
    margin: 0 10px;
  }
}
</style>
