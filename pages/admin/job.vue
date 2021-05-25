<template>
  <div class="nuxt-box">
    <header>
      <h1><i class='bx bx-user-pin'></i> Recrutement</h1>
      <p class="jobState">
        Etat des recrutements
        <vs-switch success v-model="jobState">
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
    data() {
      return {
        page:1,
        max: 14,
        jobState: false,
        jobs: []
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

  .jobState {
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 250px;
  }

</style>