<template>
  <vs-dialog v-model="active" blur @close="close()">
    <template #header>
      <h3>Nouvelle voiture</h3>
    </template>

    <div class="con-form">
      <vs-input
        label="Nom du véhicule"
        placeholder="Audi RS3"
        block
        icon-after
        v-model="formData.label"
      >
        <template #icon> <i class="bx bx-car"></i> </template>
      </vs-input>

      <vs-input
        label="Catégorie"
        placeholder="Sports"
        block
        icon-after
        v-model="formData.category"
      >
      </vs-input>

      <vs-input
        label="Retail"
        placeholder="1000"
        type="number"
        block
        icon-after
        v-model="formData.retail"
      >
      </vs-input>

      <vs-input
        label="Resell"
        placeholder="2000"
        type="number"
        block
        icon-after
        v-model="formData.resell"
      >
      </vs-input>

      <vs-input
        label="Vitesse"
        placeholder="200"
        type="number"
        block
        icon-after
        v-model="formData.speed"
      >
      </vs-input>

      <vs-input
        label="Image"
        placeholder="https://i.imgur.com/opiha.png"
        block
        icon-after
        v-model="formData.image"
      >
      </vs-input>

      <vs-button block size="large" @click="check">Ajouter</vs-button>
    </div>
  </vs-dialog>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      formData: {
        label: "",
        category: "",
        retail: 0,
        resell: 0,
        speed: 0,
        image: "",
      },
    };
  },
  methods: {
    check() {
      console.log(this.formData)
      if (
        this.formData.label &&
        this.formData.category &&
        this.formData.retail &&
        this.formData.resell &&
        this.formData.speed &&
        this.formData.image
      ) {
        this.send();
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

      const loading = this.$vs.loading()
      try {
        await this.$axios.$post(
          "https://cardealer.mrsociety404.com/api/cars",
          {
            label: this.formData.label,
            category: this.formData.category,
            retail: this.formData.retail,
            resell: this.formData.resell,
            speed: this.formData.speed,
            image: this.formData.image,
          }
        );
        this.openNotification(
          null,
          "success",
          "Waww une belle voiture !",
          "une nouvelle voiture à été enregistré !",
          "auto"
        );
        this.resetData();
        this.closeSale();
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
    resetData() {
      this.formData = {
        label: "",
        category: "",
        retail: "",
        resell: "",
        speed: "",
        image: "",
      };
    },
    closeSale() {
      this.resetData();
      this.$emit("closeCar");
    },
  },
};
</script>

<style scoped>
.vs-dialog {
  width: 600px;
}
.con-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 550px;
}
</style>