<template>
  <div class="connexion">
    <img src="@/assets/image/LogoBlack.png" alt="logo" />
    <form @submit.prevent="send">
      <vs-input
        label-placeholder="Nom d'utilisateur"
        v-model="formData.username"
      >
        <template #message-danger>
          {{ error.username }}
        </template>
      </vs-input>
      <vs-input
        label-placeholder="Mot de passe"
        v-model="formData.password"
        type="password"
        :visiblePassword="hasVisiblePassword"
        @click-icon="hasVisiblePassword = !hasVisiblePassword"
        icon-after
      >
        <template #icon>
          <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
          <i v-else class="bx bx-hide"></i>
        </template>
        <template #message-danger>
          {{ error.password }}
        </template>
      </vs-input>
      <vs-button type="submit" size="large" :loading="loadingBtn">Connexion</vs-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      error: {
        username: "",
        password: "",
      },
      hasVisiblePassword: false,
      loadingBtn: false
    };
  },
  methods: {
    async send() {
      if (this.check()) {
        this.loadingBtn = true
        try {
          await this.$axios.post(
            "https://cardealer.mrsociety404.com/api/dealers/login",
            {
              username: this.formData.username,
              password: this.formData.password,
            },
            { withCredentials: true } // remove prod
          );
          this.$router.push("/admin/sales");
        } catch (err) {
          console.log(err)
          if(err.response) {
            this.openNotification(null, 'danger', 'Connexion échouée','Les identifiants ne sont pas correcte !', 'auto');
          } else {
            this.openNotification(null, 'danger', 'Connexion échouée','Le serveur est inaccessible pour le moment.', 'auto');
          }
        }
        this.loadingBtn = false
      }
    },
    check() {
      if (this.formData.username.trim().length === 0) {
        this.error.username = "Nom d'utilisateur requis";
        return false;
      } else {
        this.error.username = "";
      }

      if (this.formData.password.trim().length === 0) {
        this.error.password = "Mot de passe requis";
        return false;
      } else {
        this.error.password = "";
      }
      return true;
    },
    openNotification(position = null, color, title, text, progress) {
      this.$vs.notification({
        color,
        position,
        title,
        text,
        progress,
      });
    },
  },
};
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