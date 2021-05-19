<template>
  <div>
    <img src="@/assets/image/error.png" alt="error">
    <h1>L’URL que vous avez entrée n’existe pas !</h1>
    <NuxtLink to="/">ACCUEIL</NuxtLink>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
  }
  img {
    width: 20%;
  }
  h1{
    margin: 1em 0;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.2em;
  }
  a {
  background: none;
  border: 2px solid #000;
  border-radius: 50px;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: .2em;
  color: #000;
  font-size: 1.5em;
  padding: 1em 3em;
  transition: all .2s;
}
</style>