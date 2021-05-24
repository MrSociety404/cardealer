<template>
  <div class="connexion">
    <img src="@/assets/image/LogoBlack.png" alt="logo">
    <form @submit.prevent="send">
      <vs-input label-placeholder="username" v-model="formData.username"></vs-input>
      <vs-input label-placeholder="password" v-model="formData.password" type="password"></vs-input>
      <vs-button type="submit" size="large">Connexion</vs-button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      send() {

      },
    }
  }
</script>

<style scoped>
  .connexion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .connexion img {
    max-width: 200px;
    max-height: 200px;
  }
  .connexion form {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2em;
  }
</style>