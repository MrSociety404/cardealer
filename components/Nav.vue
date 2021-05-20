<template>
  <div class="nav">
    <NuxtLink to="/">
      <img src="@/assets/image/smallIcon.png" alt="logo">
    </NuxtLink>
    <nav @click="closeMenu"> 
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/shop" >Shop</NuxtLink>
      <NuxtLink to="/job">Emploi</NuxtLink>
    </nav>
    <div class="responsive" @click="responsive">
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2="30" y2="1" stroke="black" stroke-width="2"/>
        <line y1="13" x2="30" y2="13" stroke="black" stroke-width="2"/>
        <line y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      responsive() {
        let svg = document.querySelector(".responsive");
        let nav = document.querySelector('.nav nav')
        let global = document.querySelector('.nav')
        if(svg.classList.contains('checked')) {
           svg.classList.remove('checked')
           nav.classList.remove('checked')
           global.classList.remove('checked')
           svg.innerHTML = '<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="30" y2="1" stroke="black" stroke-width="2"/><line y1="13" x2="30" y2="13" stroke="black" stroke-width="2"/><line y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/></svg>'
        } else {
          svg.classList.add('checked')
          nav.classList.add('checked')
          global.classList.add('checked')
          svg.innerHTML = '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1.29289" y1="27.2929" x2="27.2929" y2="1.29289" stroke="black" stroke-width="2"/><line y1="-1" x2="36.7696" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 28 28)" stroke="black" stroke-width="2"/></svg>'
        }
      },
      closeMenu() {
        let svg = document.querySelector(".responsive");
        let nav = document.querySelector('.nav nav')
        let global = document.querySelector('.nav')
        if(svg.classList.contains('checked')) {
           svg.classList.remove('checked')
           nav.classList.remove('checked')
           global.classList.remove('checked')
           svg.innerHTML = '<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="30" y2="1" stroke="black" stroke-width="2"/><line y1="13" x2="30" y2="13" stroke="black" stroke-width="2"/><line y1="25" x2="30" y2="25" stroke="black" stroke-width="2"/></svg>'
        }
      }  
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 5em;
    position: relative;
    transition: all .3s ;
  }
  .nav nav a {
    color: var(--black);
    font-size: 1.5em;
    margin: 1em;
  }
  .nav.checked{
    background: #f8f8f8;
  }
  .nav nav.checked {
    position: fixed;
    left: 0;
    top: 110px;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    background: #f8f8f8;
    transition: all .3s ;
  }
  .nav nav.checked a{
    margin: 2em auto;
  }
  .nav nav.checked a:first-child{
    margin-top: 5em;
  }
  .responsive {
    cursor: pointer;
    width: 140px;
    text-align: center;
  }
  .nav nav a:hover {
    border-bottom: 1px solid #000;
  }
  @media screen and (max-width:850px) {
    .nav {
      padding: 1em;
    }
    .nav nav {
      display: none;
      left: -100%;
    }
  }
</style>