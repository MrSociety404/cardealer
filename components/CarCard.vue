<template>
  <div class="carCard">
    <section class="image">
      <img :src="img" alt="car">
      <p class="price">$ {{price.toLocaleString()}}</p>
    </section>
    <section class="info">
      <h2 class="name"> {{name}} </h2>
      <div class="details">
        <div class="category">
          <i class="fas fa-car"></i>
          <p> {{category}} </p>
        </div>
        <div class="speed">
          <i class="fas fa-tachometer-alt"></i>
          <p> {{speed}} km/h</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['img','name','category','price','speed']
  }
</script>

<style scoped>

.carCard {
  max-width: 350px;
  width: 100%;
  border-radius: 15px;
  height: 100%;
  margin-bottom: 3em;
}
.image img {
  max-width: 350px;
  width: 100%;
  border-radius: 15px 15px 0 0;
}
.image {
  position: relative;
}
.price {
  position: absolute;
  bottom: 5px;
  right: 0;
  color: var(--white);
  font-size: 1.5em;
  letter-spacing: .2em;
  font-weight: normal;
  padding: 5px 20px;
  background: rgba(5, 9, 231, 0.637);
  border-radius: 15px 0 0 0 ;
}
.details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.category, .speed {
  display: flex;
  align-items: center;
  width: 35%;
  font-size: 1.2em;
}
.info {
  margin-bottom: 1em;
}

.category i, .speed i {
  margin-right: 5px;
}

@media screen and (max-width:850px) {
  .carCard {
    max-width: 90%;
    width: 100%;
  }
  .image img {
    max-width: 100%;
    object-fit: cover;
  }
}
</style>