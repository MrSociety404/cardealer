<template>
  <div class="hidden">
    <vs-sidebar absolute v-model="active" open>
      <template #logo>
        <img src="@/assets/image/LogoBlackOnly.png" alt="logo" />
      </template>
      <vs-sidebar-item id="sales" to="/admin/sales">
        <template #icon>
          <i class="bx bx-dollar-circle"></i>
        </template>
        Ventes
      </vs-sidebar-item>
      <vs-sidebar-item id="car" to="/admin/car">
        <template #icon>
          <i class="bx bx-car"></i>
        </template>
        Voitures
      </vs-sidebar-item>
      <vs-sidebar-item id="dealer" to="/admin/dealer">
        <template #icon>
          <i class="bx bx-briefcase"></i>
        </template>
        Vendeurs
      </vs-sidebar-item>
      <vs-sidebar-item id="job" to="/admin/job">
        <template #icon>
          <i class="bx bx-user-pin"></i>
        </template>
        Job
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-button icon @click="logout">
            <i class="bx bx-log-out-circle"></i>
          </vs-button>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "sales",
    };
  },
  mounted() {
    this.fetchNav();
  },
  methods: {
    async logout() {
      await this.$axios.get(
        "https://cardealer.mrsociety404.com/api/dealers/logout"
      );
      this.$router.push("/admin");
    },
    fetchNav() {
      if (sessionStorage.getItem("adminNav") !== null) {
        this.active = sessionStorage.getItem("adminNav");
      }
    },
    updateNav(newActive) {
      sessionStorage.setItem("adminNav", newActive);
    },
  },
};
</script>

<style scopted>
.vs-sidebar-content .vs-sidebar__logo img {
  max-width: 240px;
  max-height: 70px;
}
.vs-sidebar__item.hasIcon {
  padding: 15px;
}
.vs-sidebar-content.absolute {
  position: fixed !important;
  z-index: 9001;
  height: 100%;
}
</style>
