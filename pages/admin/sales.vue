<template>
  <div class="nuxt-box">
    <header>
      <h1><i class='bx bx-dollar-circle' ></i> Ventes</h1>
      <vs-button circle size="large"><i class='bx bx-plus' ></i> Nouvelle vente</vs-button>
    </header>
    <main>
      <h2><span class="bold">{{ sales.length }}</span> Résultats</h2>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th>Client</vs-th>
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
            <vs-td> {{tr.car}} </vs-td>
            <vs-td> {{tr.seller}} </vs-td>
            <vs-td> $ {{tr.price.toLocaleString()}} </vs-td>
            <vs-td> $ {{tr.price.toLocaleString()}} </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(sales, max)"/>
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
        sales: [
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 65000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 15641
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 1212
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 1111
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 1214254
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 44534
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 4245
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 65000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 65000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 65000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                },
                {
                  "_id": "60aa541525eb643f6813a968",
                  "client": "Sébastien Boulard",
                  "car": "Elegy",
                  "seller": "Fabien Karmel",
                  "price": 65000
                },
                {
                  "_id": "sqdqsdqsdqsd",
                  "client": "Wang",
                  "car": "Kanjo",
                  "seller": "Adam Karmel",
                  "price": 6000
                }
                ]
      }
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