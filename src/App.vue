<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <div>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div>
          <p>Loading...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss">
/* Rules
sigle hyphen - for classes 
double hyphen -- for modifiers 
*/
@import "./assets/scss/icon";
@import "./assets/scss/grid";

a {
  text-decoration: none;
}
*,
*::before,
*::after {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

span {
  opacity: 0;
  transition: all 0.4s ease;
  transform: translateY(50px);
  display: inline-block;
  color: white;
}

span.fade {
  opacity: 1;
  transform: translateY(0px);
  color: white;
}

/* Typography */
html {
  /* 62.5% of 16 "which is the dault" = 10px */
  font-size: 62.5%;
  background: black;

  /* background: black; */
}

/* colors */
:root {
  --color-primary: #2584ff;
  --color-secondary: #00d9ff;
  --color-accent: #ff3400;
  --color-headings: #1b0760;
  --color-body: #918ca4;
}

/* Screens that are less than 1024px */
body {
  font-size: 2.4rem;
  font-family: Inter, Helvetica, Arial, sans-serif;
  color: var(--color-body);
  line-height: 1.5; /* One and a half times the current size  */
  margin: 0;
}

h1,
h2,
h3 {
  color: var(--color-headings);
  margin-bottom: 1rem;
  line-height: 1.1;
}

h1 {
  font-size: 7rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

p {
  margin-top: 0;
}

/* Screens that are larger than 1024px */
@media screen and (min-width: 1024px) {
  body {
    font-size: 1.8rem;
  }

  h1 {
    font-size: 8rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.4rem;
  }
}

/* Links  */
a {
  text-decoration: none;
  color: black;
}

.link-arrow {
  color: var(--color-accent);
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
}

/* To put the arrow after and add transition time */
.link-arrow::after {
  content: "-->";
  margin-left: 5px;
  transition: margin 0.2s;
}
/* Arrow will move to the right when hower */
.link-arrow:hover::after {
  margin-left: 10px;
}

@media screen and (min-width: 1024px) {
  .link-arrow {
    font-size: 1.5rem;
  }
}

.nav__toggler {
  opacity: 0.5;
}

ul {
  list-style-type: none;
}
</style>
