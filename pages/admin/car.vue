<template>
  <div class="nuxt-box">
    <header>
      <h1><i class="bx bx-car"></i> Voitures</h1>
      <vs-button circle size="large" @click="activeNew = !activeNew"
        ><i class="bx bx-plus"></i> Nouvelle voiture</vs-button
      >
    </header>
    <main>
      <div class="head">
        <h2>
          <span class="bold">{{ cars.length }}</span> Résultats
        </h2>
        <vs-input v-model="search" icon-after label-placeholder="Recherche">
          <template #icon><i class="bx bx-search-alt"></i></template>
        </vs-input>
      </div>
      <vs-table v-if="load">
        <template #thead>
          <vs-tr>
            <vs-th>Photo</vs-th>
            <vs-th sort @click="cars = $vs.sortData($event, cars, 'name')">
              Nom</vs-th
            >
            <vs-th sort @click="cars = $vs.sortData($event, cars, 'category')"
              >Catégorie</vs-th
            >
            <vs-th sort @click="cars = $vs.sortData($event, cars, 'retail')"
              >Retail</vs-th
            >
            <vs-th sort @click="cars = $vs.sortData($event, cars, 'resell')"
              >Resell</vs-th
            >
            <vs-th sort @click="cars = $vs.sortData($event, cars, 'speed')"
              >Vitesse</vs-th
            >
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getSearch(cars, search)"
            :data="tr"
            @click="activeInfo = !activeInfo"
          >
            <vs-td>
              <vs-avatar>
                <img :src="tr.image" alt="car" />
              </vs-avatar>
            </vs-td>
            <vs-td> {{ tr.label }} </vs-td>
            <vs-td> {{ tr.category }} </vs-td>
            <vs-td> $ {{ tr.retail.toLocaleString() }} </vs-td>
            <vs-td> $ {{ tr.resell.toLocaleString() }} </vs-td>
            <vs-td>{{ tr.speed }} km/h </vs-td>

            <template #expand>
              <div class="con-content">
                <div>
                  <p>Plus d'information sur le vehicule :</p>
                </div>
                <div>
                  <vs-button flat icon> Modifier </vs-button>
                  <vs-button border danger> Supprimer </vs-button>
                </div>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </main>
    <NewCar :active="activeNew" @closeCar="closeCar" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: "isAuth",
  data() {
    return {
      activeInfo: false,
      activeNew: false,
      load: false,
      search: "",
      cars: [],
    };
  },
  mounted() {
    const loading = this.$vs.loading();
    this.fetch();
    loading.close();
  },
  methods: {
    async fetch() {
      this.cars = await this.$axios.$get(
        "https://cardealer.mrsociety404.com/api/cars"
      );
      this.load = true;
    },
    closeCar() {
      this.activeNew = false
      this.fetch()
    }
  },
};
</script>

<style scoped>
.vs-avatar img {
  width: auto;
  height: 100%;
  display: block;
  object-fit: cover;
}
.head {
  display: flex;
  justify-content: space-between;
}
</style>