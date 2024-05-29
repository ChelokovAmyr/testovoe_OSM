<template>
  <div class="home">
    <div>
      <apexchart
          width="1000"
          type="bar"
          :options="chartOptions"
          :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'


const series = ref([
  {
    name: "series-1",
    data: []
  },
])

const chartOptions = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: []
  },
})


const loadPeople = async () => {
  await fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(dataPeople => {
        dataPeople.results.forEach((el)=> {
          series.value[0].data.push(el.height)
        })
        dataPeople.results.forEach((el)=> {
          chartOptions.value.xaxis.categories.push(el.name)
        })
      });
}

onMounted(async ()=> {
  await loadPeople()
})
</script>

<style scoped>

</style>
