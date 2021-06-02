<template>
  <div class="container">
    <script src="https://kit.fontawesome.com/2028433eb8.js" crossorigin="anonymous"></script>
    <AdminNav />
    <Nuxt />
  </div>
</template>

<style>

:root {
  --black: #000;
  --white: #fff;
  --primary: #1F5DFB;
  --gray: #808080;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100vh;
  background: var(--white);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
input:focus, textarea:focus, select:focus{
  outline: none;
}
.nuxt-box {
  margin-left: 260px;
}
header {
  max-width: 90%;
  margin: auto;
  padding: 2.5em 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(31,93,251,.1);
}
header h1 {
  font-weight: normal;
  display: flex;
  align-items: center;
}
header h1 i {
  font-size: 1.3em;
  margin-right: .6em;
}
main {
  max-width: 90%;
  margin: auto;
  padding: 2em 0;
}
main h2 {
  font-weight: normal;
  font-size: 1.2em;
  margin: 1em 0;
}
main h2 .bold {
  font-weight: bold;
}
</style>
