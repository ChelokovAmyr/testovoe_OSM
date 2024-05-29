<template>
  <div class="table-wrap">
    <n-data-table
        :columns="columns"
        :data="allProducts"
        :bordered="true"
    />
    <n-pagination
        class="pagination"
        v-model:page="page"
        :page-count="pageCount"
        @update:page="changePage"
    />
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const createColumns = () => {
  return [
    {
      title: 'Имя',
      key: 'name'
    },
    {
      title: 'Высота',
      key: 'height'
    },
    {
      title: 'Год рождения',
      key: 'birth_year'
    },
    {
      title: 'Пол',
      key: 'gender'
    }
  ]
}

const pageCount = ref(null);

const changePage = async (page) => {
  await fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        allProducts.value = data.results;
      });
}

const page = ref(1);

const allProducts = ref([])

const columns = createColumns()

const loadPeople = async () => {
  await fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        pageCount.value = Math.round( data.count / 10);
        allProducts.value = data.results;
      });
}

onMounted(async ()=> {
  await loadPeople()
})
</script>

<style scoped>

.table-wrap{
  margin: 50px;
}
.pagination{
  margin: 50px 0;
}
</style>
