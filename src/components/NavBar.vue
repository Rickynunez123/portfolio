<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const collapsibles = ref(false);
const route = useRoute();

const isActive = (to) => {
  return route.path === to;
};

const handleClick = (event) => {
  event.preventDefault();

  // Get the clicked list item
  const listItem = event.currentTarget.closest(".nav__item");
  if (listItem !== null) {
    // Add the .lo class after 1 second
    setTimeout(() => {
      listItem.classList.add("animation");
    }, 100);
  }

  // Navigate to the clicked link
  // route.push(event.currentTarget.href);
};

function onClickCollapsible() {
  collapsibles.value = !collapsibles.value;
  console.log(collapsibles.value);
}
</script>

<template>
  <header>
    <div>
      <header>
        <div
          v-bind:class="{
            'nav collapsible': true,
            'collapsible--expanded': collapsibles,
          }"
          @click="onClickCollapsible"
        >
          <!-- Logo -->
          <RouterLink to="/"><h3>Ricardo Nunez</h3></RouterLink>
          <!-- Collapsible Menu -->
          <svg class="icon icon--white nav__toggler">
            <use xlink:href="../assets/images/sprite.svg#menu"></use>
          </svg>
          <!-- Options -->
          <ul class="nav__list collapsible__content" style="margin-right: 3rem">
            <div class="nav__list__options">
              <li :class="isActive('/') ? 'nav__item__active' : 'nav__item'">
                <RouterLink to="/" @click="handleClick">Home</RouterLink>
              </li>
            </div>
            <div class="nav__list__options">
              <li
                :class="
                  isActive('/projects') ? 'nav__item__active' : 'nav__item'
                "
              >
                <RouterLink to="/projects" @click="handleClick"
                  >Projects</RouterLink
                >
              </li>
            </div>
            <div class="nav__list__options">
              <li
                :class="
                  isActive('/examples') ? 'nav__item__active' : 'nav__item'
                "
              >
                <RouterLink to="/examples" @click="handleClick"
                  >Sample Work Videos</RouterLink
                >
              </li>
            </div>
            <div class="nav__list__options">
              <li
                :class="isActive('/about') ? 'nav__item__active' : 'nav__item'"
              >
                <RouterLink to="/about" @click="handleClick">About</RouterLink>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/nav";
@import "../assets/scss/icon";
@import "../assets/scss/collapsible";

h3 {
  margin: 1rem;
  color: rgb(239, 230, 230);
}

@media screen and (min-width: 768px) {
  /* This will change the visibility on fullscreen */
  .nav__list {
    width: auto;
    display: flex;
    font-size: 1.6rem;
    max-height: 100%;
    opacity: 1;
  }
}

.nav__item__active.animation::before {
  transform: scaleX(1);
}
</style>
