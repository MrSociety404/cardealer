<template>
  <vs-dialog v-model="active" blur @close="closeSale()">
    <template #header>
      <h3>Nouvelle vente</h3>
    </template>

    <div class="con-form">
      <vs-input
        label="Client"
        placeholder="John Doe"
        block
        icon-after
        v-model="formData.client"
      >
        <template #icon> <i class="bx bx-user"></i> </template>
      </vs-input>

      <vs-select
        label="Vendeur"
        placeholder="Fabien Karmel"
        block
        filter
        icon-after
        v-model="formData.dealer"
      >
        <vs-option
          :label="dealer.firstname + ' ' + dealer.lastname"
          :value="dealer._id"
          v-for="dealer in dealers.data"
          :key="dealer._id"
        >
          {{ dealer.firstname }} {{ dealer.lastname }}
        </vs-option>
      </vs-select>

      <vs-select
        label="Voiture"
        placeholder="Audi RS3"
        block
        filter
        icon-after
        v-model="formData.car"
      >
        <vs-option
          :label="car.label"
          :value="car._id"
          v-for="car in cars.data"
          :key="car._id"
        >
          {{ car.label }}
        </vs-option>
      </vs-select>

      <vs-input
        label="Prix"
        placeholder="1000"
        type="number"
        block
        icon-after
        v-model="formData.price"
      >
        <template #icon> <i class="bx bx-money"></i> </template>
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
        client: "",
        dealer: "",
        car: "",
        price: "",
      },
      dealers: [],
      cars: [],
    };
  },
  async mounted() {
    const loading = this.$vs.loading();
    this.cars = await this.$axios.get(
      "https://cardealer.mrsociety404.com/api/cars"
    );
    this.dealers = await this.$axios.get('https://cardealer.mrsociety404.com/api/dealers')
    // this.dealers = [
    //   {
    //     username: "MrSociety404",
    //     _id: "60af535dfa8d811edcb12a5e",
    //     firstname: "Fabien",
    //     lastname: "Karmel",
    //   },
    // ];
    loading.close();
  },
  methods: {
    closeSale() {
      this.resetData();
      this.$emit("closeSale");
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
      this.formData.client = "";
      this.formData.dealer = "";
      this.formData.car = "";
      this.formData.price = "";
    },
    check() {
      if (
        this.formData.client &&
        this.formData.dealer &&
        this.formData.car &&
        this.formData.price
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
      const loading = this.$vs.loading();
      try {
        await this.$axios.$post(
          "https://cardealer.mrsociety404.com/api/sales",
          {
            client: this.formData.client,
            dealer: this.formData.dealer,
            car: this.formData.car,
            price: this.formData.price,
          }
        );
        this.openNotification(
          null,
          "success",
          "De l'argent ? j'aime ca !",
          "un nouvelle vente à été enregistré !",
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
  height: 300px;
  width: 550px;
}
</style>