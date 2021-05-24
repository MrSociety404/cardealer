<template>
  <div class="container">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
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
</style>
