<template>
  <div class="shop">
    <h1>CATALOGUE</h1>
    <section class="setting" v-if="!$fetchState.pending">
      <div class="search">
        <label for="search">Recherche</label>
        <div class="search_input">
          <i class="fas fa-search" id="search_icon"></i>
          <input type="input" v-model="search"  placeholder="Recherche" name="search" id='search' />
        </div>
      </div>
      <div class="category">
        <label for="category">Catégorie</label>
        <div class="category_input">
          <select name="category" v-model="category" id="category">
            <option value="">Tout</option>
            <option value="super">Super</option>
            <option value="sports">Sports</option>
            <option value="offroad">Tout terrain</option>
            <option value="sedans">Sédan</option>
            <option value="motorcycles">Moto</option>
            <option value="suvs">SUV</option>
            <option value="vans">Van</option>
            <option value="coupes">Coupée</option>
            <option value="classics">Classique</option>
            <option value="muscle">Muscle</option>
            <option value="compacts">Compact</option>
          </select>
          <i class="fas fa-sliders-h" id="setting_icon"></i>
        </div>
      </div>
    </section>
    <section class="catalogue" v-if="!$fetchState.pending">
      <CarCard 
        v-for="car in filteredCars"
        :key="car.id"
        :img="car.Image" 
        :name="car.Model" 
        :category="car.Type" 
        :price="car.Price" 
        :speed="car.Speed" 
      />
      <div class="no-result" v-if="filteredCars.length === 0">
        <h1>Aucun résultat ne correspond à votre recherche !</h1>
      </div>
    </section>
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
        search: '',
        category: ''
      }
    },
    async fetch() {
      this.cars = await fetch(
        'https://mrsociety404.com/API/cardealer/cardealer-allcar.php'
        ).then(res => res.json())
    },
    computed: {
      filteredCars() {
        return this.cars.filter( (car) => {
          return car.Type.toLowerCase().includes(this.category) &&  car.Model.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  }
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
    letter-spacing: .2em;
  }
  .setting {
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .search, .category {
    margin: 1.5em 10px;
  }
  .setting label {
    letter-spacing: .1em;
  }
  .search_input, .category_input {
    display: flex;
    font-size: 1.2em;
    align-items: center;
    padding: 10px;
    background: #fff;
    border-radius: 15px;
    max-width: 280px;
    margin-top: 10px;
  }
  #search {
    background: none;
    border: none;
    font-size: 1em;
    margin-left: 10px;
  }
  #category {
    background: none;
    border: none;
    font-size: 1em;
    margin-right: 10px;
    max-width: 280px;
    width: 280px;
  }
  @media screen and (max-width: 850px) {
    .search, .category {
      margin: .8em 10px;
      
    }
    
  }
  
</style>