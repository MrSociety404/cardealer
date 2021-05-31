<template>
  <div class="nuxt-box">
    <header>
      <h1><i class='bx bx-dollar-circle' ></i> Ventes</h1>
      <vs-button circle size="large" @click="active=!active"><i class='bx bx-plus'></i> Nouvelle vente</vs-button>
    </header>
    <main>
      <h2><span class="bold">{{ sales.length }}</span> Résultats</h2>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>Client</vs-th>
            <vs-th>Photo</vs-th>
            <vs-th>Voiture</vs-th>
            <vs-th sort @click="sales = $vs.sortData($event ,sales, 'seller')">Vendeur</vs-th>
            <vs-th sort @click="sales = $vs.sortData($event ,sales, 'price')">Prix</vs-th>
            <vs-th sort @click="sales = $vs.sortData($event ,sales, 'price')">Bénéfices</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr,i) in $vs.getPage(sales, page, max)"
            :data="tr"
          >
            <vs-td> {{tr.client}} </vs-td>
            <vs-td>  
              <vs-avatar>
                <img :src="tr.car.image" alt="car">
              </vs-avatar>  
            </vs-td>
            <vs-td> {{tr.car.label}}</vs-td>
            <vs-td> {{tr.dealer.firstname + ' ' + tr.dealer.lastname}} </vs-td>
            <vs-td> $ {{tr.price.toLocaleString()}} </vs-td>
            <vs-td> $ {{(tr.price - tr.car.retail).toLocaleString()}} </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(sales, max)"/>
        </template>
      </vs-table>
    </main>
    <NewSale :active="active" @closeSale="close" />
    
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    // middleware:'isAuth',
    data() {
      return {
        page:1,
        max: 14,
        active: false,
        sales: []
      }
    },
    mounted() {
      const loading = this.$vs.loading()
      this.fetch()
      loading.close()
    },
    methods: {
      async fetch() {
        this.sales = await this.$axios.$get(
          "https://cardealer.mrsociety404.com/api/sales"
        );
      },
      close() {
        this.active = false
        this.fetch()
      }
    }
  }
</script>

<style scoped>
.vs-avatar img {
  width: auto;
  height: 100%;
  display: block;
  object-fit: cover;
} 
</style>