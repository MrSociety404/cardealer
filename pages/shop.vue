<template>
  <div class="shop">
    <h1>CATALOGUE</h1>
    <div v-if="!$fetchState.pending">
      <section class="setting">
        <vs-input label="Recherche" icon-after v-model="search">
          <template #icon>
            <i class='bx bx-search-alt'></i>
          </template>
        </vs-input>
        <vs-select v-model="selectCategory" label="Catégorie" placeholder="Tout" class="category-select">
          <vs-option 
            v-for="category in categoryList"
            :key="category.value"
            :label="category.label"
            :value="category.value"
          >{{ category.label }}</vs-option>
        </vs-select>
      </section>
      <section class="catalogue">
          <vs-card v-for="car in filteredCars" :key="car._id" type="1">
            <template #title>
              <h3> {{car.name}} </h3>
            </template>
            <template #img>
              <img :src="car.image" alt="">
            </template>
            <template #text>
              <p>
                <i class='bx bx-category-alt' ></i>
                {{ categoryList.find(e => e.value == car.category).label  }}
              </p>
            </template>
            <template #interactions>
              <vs-button>
                {{ car.resell.toLocaleString() }} $
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="fas fa-tachometer-alt"></i>
                <span class="span">
                  {{ car.speed }}
                </span>
              </vs-button>
            </template>
          </vs-card>
        <div class="no-result" v-if="filteredCars.length === 0">
          <h1>Aucun résultat ne correspond à votre recherche !</h1>
        </div>
      </section>
    </div>
    <section class="loading" v-else>
      <Loading />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [],
      search: "",
      selectCategory: '',
      categoryList: [
        {
          value: "all",
          label: "Tout",
        },
        {
          value:'super',
          label:'Super'
        },
        {
          value:'sports',
          label:'Sports'
        },
        {
          value:'import',
          label:'Importées'
        },
        {
          value:'offroad',
          label:'Tout terrain'
        },
        {
          value:'sedans',
          label:'Sédans'
        },
        {
          value:'suvs',
          label:'SUV'
        },
        {
          value:'vans',
          label:'van'
        },
        {
          value:'coupes',
          label:'Coupées'
        },
        {
          value:'sportsclassics',
          label:'Classiques'
        },
        {
          value:'muscle',
          label:'Muscle'
        },
        {
          value:'compacts',
          label:'Compactes'
        },
        
      ],
    };
  },
  async fetch() {
    this.cars = await this.$axios.$get(
      "https://cardealer.mrsociety404.com/api/car/"
    );
  },
  computed: {
    filteredCars() {
      if (this.cars.length === 0) {
        return [];
      }
      return this.cars.filter((car) => {
        return (
          car.category.toLowerCase().includes(this.selectCategory === 'all' ? '' : this.selectCategory) &&
          car.name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
.shop {
  margin: auto;
  max-width: 1600px;
  width: 100%;
  padding: 1em;
}
.catalogue {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
h1 {
  text-align: center;
  font-weight: normal;
  letter-spacing: 0.2em;
}
.setting {
  margin: 1em 10px;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.vs-card-content {
  margin-bottom: 2em;
}
@media screen and (max-width: 850px) {
  .search,
  .category {
    margin: 0.8em 10px;
  }
}
</style>