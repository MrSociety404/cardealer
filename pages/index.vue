<template>
  <div class="container">
    <div class="main">
      <div class="bk"></div>
      <NuxtLink to="/shop">CATALOGUE</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main a {
  margin-top: 15%;
  background: none;
  border: 2px solid #FFFFFF;
  border-radius: 50px;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: .2em;
  color: #fff;
  font-size: 1.5em;
  padding: 1em 3em;
  transition: all .2s;
}
.bk {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: -2;
  background: url(@/assets/image/BK.png) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
@media screen and (max-width:850px) {
  .bk {
    background: url(@/assets/image/BKPhone.png) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .main a {
    margin-top: 30%;
  }
}
</style>
