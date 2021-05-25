<template>
  <div class="nuxt-box">
    <header>
      <h1><i class='bx bx-car'></i> Voitures</h1>
      <vs-button circle size="large"><i class='bx bx-plus' ></i> Nouvelle voiture</vs-button>
    </header>
    <main>
      <h2><span class="bold">{{ cars.length }}</span> Résultats</h2>
      <vs-table v-if="!$fetchState.pending">
        <template #thead>
          <vs-tr>
            <vs-th sort @click="cars = $vs.sortData($event ,cars, 'name')">Nom</vs-th>
            <vs-th sort @click="cars = $vs.sortData($event ,cars, 'category')">Catégorie</vs-th>
            <vs-th sort @click="cars = $vs.sortData($event ,cars, 'retail')">Retail</vs-th>
            <vs-th sort @click="cars = $vs.sortData($event ,cars, 'resell')">Resell</vs-th>
            <vs-th sort @click="cars = $vs.sortData($event ,cars, 'speed')">Vitesse</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr,i) in $vs.getPage(cars, page, max)"
            :data="tr"
            @click="activeInfo = !activeInfo"
          >
            <vs-td> {{tr.label}} </vs-td>
            <vs-td> {{tr.category}} </vs-td>
            <vs-td> $ {{tr.retail.toLocaleString()}} </vs-td>
            <vs-td> $ {{tr.resell.toLocaleString()}} </vs-td>
            <vs-td>{{tr.speed}} km/h </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(cars, max)"/>
        </template>
      </vs-table>
    </main>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        page:1,
        max: 14,
        activeInfo: false,
        cars :[]
      }
    },
    async fetch() {
    this.cars = await this.$axios.$get(
      "https://cardealer.mrsociety404.com/api/admin/cars"
    );
  },
  }
</script>

<style scoped>
  .nuxt-box {
    margin-left: 260px;
  }
  header {
    max-width: 90%;
    margin: auto;
    padding: 2.5em 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(31,93,251,.1);
  }
  header h1 {
    font-weight: normal;
    display: flex;
    align-items: center;
  }
  header h1 i {
    font-size: 1.3em;
    margin-right: .6em;
  }
  main {
    max-width: 90%;
    margin: auto;
    padding: 2em 0;
  }
  main h2 {
    font-weight: normal;
    font-size: 1.2em;
    margin: 1em 0;
  }
  main h2 .bold {
    font-weight: bold;
  }

</style>