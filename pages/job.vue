<template>
  <div>
    <div class="form">
      <h1>Recrutement</h1>
      <form v-if="jobState" action="">
        <h2>Tous les champs sont obligatoires ! </h2>

        <div class="small-input">
          <div>
            <label for="fname">Prénom</label>
            <input type="text" name="fname" id="fname">
          </div> 

          <div>
            <label for="lname">Nom</label>
            <input type="text" name="lname" id="lname">
          </div>
        </div>

        <div class="small-input">
          <div> 
            <label for="phone">Téléphone</label>
            <input type="text" name="phone" id="phone">
          </div> 

          <div> 
            <label for="sexe">Sexe</label>
            <select name="sexe" id="sexe">
              <option value="H">Homme</option>
              <option value="F">Femme</option>
            </select>
          </div> 
        </div>

        <label for="experience">Expérience professionnelle</label>
        <textarea name="experience" id="experience" cols="30" rows="5"></textarea>

        <label for="availability">Disponibilités</label>
        <textarea name="availability" id="availability" cols="30" rows="5"></textarea>

        <label for="skills">Qualités</label>
        <textarea name="skills" id="skills" cols="30" rows="5"></textarea>

        <label for="motivation">Motivation</label>
        <textarea name="motivation" id="motivation" cols="30" rows="5"></textarea>

        <button type="submit" name="submit" @click="send">POSTULER</button>
      </form>
      <div v-else class="no-recruit">
        <img src="@/assets/image/no-job.png" alt="not-found">
        <p>Les recrutements sont fermés pour le moment.<br>Lors de leurs réouvertures, une annonce publique sur les cannaux de la concession sera effectuée !<br><br>A bientôt dans nos locaux !</p>

        <NuxtLink to="/">ACCUEIL</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
  export default {
    computed: {
      ...mapState(['jobState'])
    }   
  }
</script>

<style scoped>
  .form {
  max-width: 800px ;
  width: 80%;
  margin: auto;
}

.form form {
  display: flex;
  flex-direction: column;
}

.form h1 {
  text-align: center;
  letter-spacing: .2em;
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

.form form select {
  height: 32px;
}

.form form input, .form form textarea, .form form select {
  background: none;
  border: none;
  border-bottom: 2px solid var(--gray);
  margin-bottom: 1.5em;
  font-size: 1em;
}

.form form input:hover, .form form textarea:hover {
  background: none;
  border: none;
  border-bottom: 2px solid var(--primary);
}

.form form label {
  font-size: 1em;
  letter-spacing: .2em;
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
  letter-spacing: .2em;
  margin: auto;
  margin-bottom: 2em;
  margin-top: 1em;
  cursor: pointer;
}

.form button[type="submit"]:hover {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
  transition: .3s; 
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
  margin: .5em 0;
  font-weight: 500;
}

.no-recruit a {
  width: 250px;
  height: 70px;
  border-radius: 50px;
  background: none;
  border: 2px solid var(--primary);
  font-size: 1.2em;
  letter-spacing: .2em;
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