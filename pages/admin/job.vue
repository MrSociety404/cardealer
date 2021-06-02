<template>
  <div class="nuxt-box">
    <header>
      <h1><i class='bx bx-user-pin'></i> Recrutement</h1>
      <p class="jobState">
        Etat des recrutements
        <vs-switch success v-model="jobState" @click="toggleJob">
          <template #off>
              <i class='bx bx-x' ></i>
          </template>
          <template #on>
              <i class='bx bx-check' ></i>
          </template>
        </vs-switch>
      </p>   
    </header>
    <main>
      <h2><span class="bold">{{ jobs.length }}</span> Résultats</h2>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th sort @click="jobs = $vs.sortData($event ,jobs, 'name')">Candidat</vs-th>
            <vs-th>Téléphone</vs-th>
            <vs-th>Disponibilitées</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr,i) in $vs.getPage(jobs, page, max)"
            :data="tr"
          >
            <vs-td> {{tr.name}} </vs-td>
            <vs-td> {{tr.phone}} </vs-td>
            <vs-td> {{tr.availability}} </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength(jobs, max)"/>
        </template>
      </vs-table>
    </main>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware:'isAuth',
    data() {
      return {
        page:1,
        max: 14,
        jobState: false,
        jobs: []
      }
    },
    mounted() {
      const loading = this.$vs.loading()
      this.fetch()
      this.fetchState()
      loading.close()
    },
    methods: {
      async fetch() {
        this.jobs = await this.$axios.get(
          "https://cardealer.mrsociety404.com/api/jobs"
        );
      },
      async fetchState() {
        this.jobState = await this.$axios.get("https://cardealer.mrsociety404.com/api/settings/jobState")
      },
      async toggleJob() {
        const loading = this.$vs.loading()
        await this.$axios.patch("https://cardealer.mrsociety404.com/api/settings/jobState", {state: !this.jobState})
        this.fetchState()
        loading.close()
      }
    }
  }
</script>

<style scoped>
.jobState {
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 250px;
}

</style>