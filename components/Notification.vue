<template>
  <div class="notif" :class="type">
    <h2> {{title}} </h2>
    <p> {{message}} </p>
    <i class="fas fa-times" @click="close"></i>
  </div>
</template>

<script>
export default {
  props: ['title','message','type'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scopted>

.notif {
  position: fixed;
  width: 450px;
  max-width: 80%;
  border-radius: 15px;
  text-align: center;
  padding: 1em;
  left: 0;
  right: 0;
  top: 120px;
  margin: auto;
  z-index: 100;
}

.notif h2 {
  font-weight: bold;
  font-size: 1.2em;
}

.notif p {
  font-weight: normal;
  font-size: 1em;
}

.notif i {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}

.notif.error {
  background-color: #FFC0C0 ;
  color: #E70404;
}

.notif.success {
  background-color: #B7E7B7 ;
  color: #008000;
}

</style>