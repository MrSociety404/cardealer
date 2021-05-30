<template>
  <vs-dialog v-model="active" blur >
        <template #header>
          <h4>Nouveau Vendeur</h4>
        </template>

        <div class="con-form">
          <vs-input 
            label="Prénom *" 
            placeholder="John" 
            block 
            icon-after
            v-model="formData.firstname"
          > 
            <template #icon> <i class='bx bx-user'></i> </template> 
          </vs-input>
          <vs-input 
            label="Nom *" 
            placeholder="Doe" 
            block 
            icon-after
            v-model="formData.lastname"
          > 
            <template #icon> <i class='bx bx-user'></i> </template> 
          </vs-input>

          <vs-input 
            label="Pseudo *" 
            placeholder="JoDoeX44" 
            block 
            icon-after
            v-model="formData.username"
          > 
            <template #icon> <i class='bx bx-mask'></i> </template> 
          </vs-input>

          <vs-input 
            label="Mot de passe *" 
            placeholder="azerty10" 
            block 
            icon-after
            v-model="formData.password"
          > 
            <template #icon> <i class='bx bx-hide'></i> </template> 
          </vs-input>

          <vs-input 
            label="Photo de profil" 
            placeholder="https://i.imgur/xdsqd.png" 
            block 
            icon-after
            v-model="formData.image"
          >
           <template #icon> <i class='bx bx-camera' ></i> </template> 
          </vs-input>

          <vs-input
            label="Grade" 
            placeholder="Novice" 
            block 
            icon-after
            v-model="formData.status"
          >
            <template #icon> <i class='bx bx-briefcase'></i> </template> 
          </vs-input>

          <vs-button block size="large" @click="check">
            Ajouter
          </vs-button>
        </div>

        <template #footer>

        </template>
      </vs-dialog>
</template>

<script>
  export default {
    props: ['active'],
    data() {
      return {
        formData: {
          firstname: '',
          lastname: '',
          username: '',
          password: '',
          image: '',
          status: '',
          message: ''
        },
      }
    },
    methods: {
      check() {
        if(this.formData.firstname && this.formData.lastname && this.formData.username && this.formData.password ) {
          this.send()
        } else {
          this.openNotification(null, 'danger', 'Une erreur est survenue !', 'Veuillez remplir tout les champs obligatoire ( * ) ! ', 'auto')
        }
      },
      async send() {
        const loading = this.$vs.loading()
        this.$axios.setHeader('Authorization', 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWY1NGZiODgzN2M3MGJkMDA5YmFiYiIsInVzZXJuYW1lIjoiRW1tYXRyb3Vzc2UiLCJpYXQiOjE2MjIxMzUwMjIsImV4cCI6MTYyMjE0MjIyMn0.3-v09xa7q-c9sC5TNBMjPERxYZvaGSEgQcVVmP1qK6A')
        const res = await this.$axios.$post('https://cardealer.mrsociety404.com/api/dealers', {
          firstname: this.formData.firstname,
          lastname: this.formData.lastname,
          username: this.formData.username,
          password: this.formData.password,
          image: this.formData.image,
          status: this.formData.status
        })
        console.log(res)
        loading.close()
        if(res == null) {
          this.openNotification(null, 'danger', 'Une erreur est survenue !', res.message , 'auto')
        } else {
          this.openNotification(null, 'success', 'Oh ! un nouveau !', 'un nouvelle employé à été ajouté !', 'auto')
          this.fetch()
          this.resetData()
          this.active = false
        }        
      },
      openNotification(position = null, color, title, text, progress){
        this.$vs.notification({
          color,
          position,
          title,
          text,
          progress
        })
      },
      resetData() {
        this.formData.firstname = ''
        this.formData.lastname = ''
        this.formData.username = ''
        this.formData.password = ''
        this.formData.image = ''
        this.formData.status = ''
      }
    }
  }
</script>

<style scoped>
.vs-dialog{
  width: 600px;
}
.con-form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  width: 550px;
}
</style>