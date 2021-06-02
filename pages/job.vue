<template>
  <div>
    <div class="form">
      <h1>Recrutement</h1>
      <div class="formData" v-if="jobState.state">
        <h2>Tous les champs sont obligatoires !</h2>

        <div class="small-input">
          <div>
            <label >Prénom Nom</label>
            <input type="text" placeholder="John Doe" v-model="formData.name" />
          </div>

          <div>
            <label >Téléphone</label>
            <input type="number" placeholder="5550101" v-model="formData.phone" />
          </div>
        </div>

        <label >Expérience professionnelle</label>
        <textarea
          
          v-model="formData.experience"
          cols="30"
          rows="5"
        ></textarea>

        <label >Disponibilités</label>
        <textarea
          
          v-model="formData.availability"
          cols="30"
          rows="5"
        ></textarea>

        <label >Motivation</label>
        <textarea 
          v-model="formData.motivation"
          cols="30" 
          rows="5"
        >
        </textarea>

        <label >Commentaire pour le recruteur</label>
        <textarea
          
          v-model="formData.comment"
          cols="30"
          rows="5"
        ></textarea>

        <vs-button size="large" @click="check">POSTULER</vs-button>
      </div>
      <div v-else class="no-recruit">
        <img src="@/assets/image/no-job.png" alt="not-found" />
        <p>
          Les recrutements sont fermés pour le moment.<br />Lors de leurs
          réouvertures, une annonce publique sur les cannaux de la concession
          sera effectuée !<br /><br />A bientôt dans nos locaux !
        </p>

        <vs-button to="/" border size="xl">Accueil</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobState: {
        state: false,
      },
      formData: {
        name: "",
        phone: "",
        experience: "",
        motivation: "",
        comment: "",
      },
    };
  },
  mounted() {
    this.fetchState();
  },
  head() {
    return {
      titleTemplate: "%s - Job",
    };
  },
  methods: {
    async fetchState() {
      this.jobState = await this.$axios.$get(
        "https://cardealer.mrsociety404.com/api/settings/jobState"
      );
    },
    check() {
      if (
        this.formData.name &&
        this.formData.phone &&
        this.formData.experience &&
        this.formData.availability &&
        this.formData.motivation &&
        this.formData.comment
      ) {
        this.send()
      } else {
        this.openNotification(
          null,
          "danger",
          "Une erreur est survenue !",
          "Veuillez remplir tout les champs obligatoire ( * ) ! ",
          "auto"
        );
      }
    },
    async send() {
      const loading = this.$vs.loading();
      try {
        await this.$axios.$post("https://cardealer.mrsociety404.com/api/jobs", {
          name: this.formData.name,
          phone: this.formData.phone,
          experience: this.formData.experience,
          availability: this.formData.availability,
          motivation: this.formData.motivation,
          comment: this.formData.comment,
        })
        this.openNotification(
          null,
          "success",
          "Bientot dans concessionnaire ?",
          "Votre recrutement a été pris en compte !",
          "auto"
        );
      } catch (err) {
        this.openNotification(
          null,
          "danger",
          "Une erreur est survenue !",
          err,
          "auto"
        );
      }
      loading.close()
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
.form {
  max-width: 800px;
  width: 80%;
  margin: auto;
}

.form .formData {
  display: flex;
  flex-direction: column;
}

.form h1 {
  text-align: center;
  letter-spacing: 0.2em;
  font-weight: normal;
  margin-bottom: 1em;
}

.form h2 {
  color: var(--gray);
  font-weight: normal;
  margin: 1em -5px;
  font-size: 1em;
}

.form input {
  height: 30px;
}

.form .formData select {
  height: 32px;
}

.form .formData input,
.form .formData textarea,
.form .formData select {
  background: none;
  border: none;
  border-bottom: 2px solid var(--gray);
  margin-bottom: 1.5em;
  font-size: 1em;
}

.form .formData input:hover,
.form .formData textarea:hover {
  background: none;
  border: none;
  border-bottom: 2px solid var(--primary);
}

.form .formData label {
  font-size: 1em;
  letter-spacing: 0.2em;
  line-height: 20px;
}

.form .small-input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.small-input div {
  min-width: 45%;
  display: flex;
  flex-direction: column;
}

.small-input div input {
  width: 100%;
  margin-bottom: 2.5em;
}

.form button[type="submit"] {
  width: 250px;
  height: 70px;
  border-radius: 50px;
  background: none;
  border: 2px solid var(--gray);
  font-size: 1.2em;
  letter-spacing: 0.2em;
  margin: auto;
  margin-bottom: 2em;
  margin-top: 1em;
  cursor: pointer;
}

.form button[type="submit"]:hover {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
  transition: 0.3s;
}

@media screen and (max-width: 850px) {
  .small-input div {
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form .small-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.no-recruit {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.no-recruit img {
  width: 50%;
}

.no-recruit p {
  text-align: center;
  color: var(--gray);
  margin: 0.5em 0;
  font-weight: 500;
}

.no-recruit a {
  width: 250px;
  height: 70px;
  border-radius: 50px;
  background: none;
  border: 2px solid var(--primary);
  font-size: 1.2em;
  letter-spacing: 0.2em;
  margin: auto;
  margin-bottom: 2em;
  margin-top: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--black);
}
</style>