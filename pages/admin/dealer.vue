<template>
  <div class="nuxt-box">
    <header>
      <h1><i class="bx bx-briefcase"></i> Vendeurs</h1>
      <vs-button circle size="large" @click="active = !active"
        ><i class="bx bx-plus"></i> Nouveau vendeur</vs-button
      >
    </header>
    <main class="dealer">
      <vs-card v-for="dealer in dealers" :key="dealer._id" type="5">
        <template #img>
          <img :src="dealer.image" alt="pic of the dealer" />
        </template>
        <template #title>
          <h3>{{ dealer.firstname }} {{ dealer.lastname }}</h3>
        </template>
        <template #text>
          <p>
            Employé(e) depuis le
            {{ new Date(dealer.joinAt).toLocaleDateString() }}
          </p>
        </template>
        <template #interactions>
          <vs-button>
            <span class="span"> {{ dealer.status }} </span>
          </vs-button>
        </template>
      </vs-card>
    </main>
    <NewDealer :active="active" @closeDealer="closeDealer"/>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: "isAuth",
  data() {
    return {
      active: false,
      dealers: [],
    };
  },
  mounted() {
    const loading = this.$vs.loading();
    this.fetch();
    loading.close();
  },
  methods: {
    async fetch() {
      try {
        this.dealers = await this.$axios.$get(
          "https://cardealer.mrsociety404.com/api/dealers"
        );
      } catch (err) {
        console.log(err);
      }
    },
    closeDealer() {
      this.active = false,
      this.fetch()
    }
  },
};
</script>

<style scoped>
.dealer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>