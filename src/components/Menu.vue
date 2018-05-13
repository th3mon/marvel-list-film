<template>
  <div id='menu' class="nav-top">
      <h2 class="app-title" v-once>{{appTitle}}</h2>
    <div v-on:click="toggleClass" class="btn" v-bind:class="{active: isActive}">
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
    </div>
    <ul class="menu-content" v-bind:class="{active: isActive}">
      <li>
        <a class="menu-item" href="#">
          Home
        </a>
      </li>
      <li>
        <a class="menu-item" href="#">
          Contact
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isActive: false,
      appTitle: 'Marvel list film',
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: #f0f;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.app-title {
  margin: 0;
  padding: 0;
  line-height: 1;
}

.nav-top {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

.menu-content {
  width: 150px;
  height: 100%;
  background-color: black;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  transform: scale(0, 1);
  transform-origin: right;
  transition: 0.15s all ease;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 60px 15px 30px;
}

.menu-content.active {
  transform: scale(1, 1);
}

.menu-content .menu-item {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin: 2.5px 0;
  padding: 2.5px 0;
  display: block;
}

.menu-content .menu-item:hover {
  color: #E23636;
}

.btn {
  z-index: 1001;
}

.btn .burger-icon {
  width: 30px;
  height: 3px;
  display: block;
  margin: 5px 0;
  background-color: #000;
  position: relative;
}

.btn.active .burger-icon {
  background-color: #fff;
  opacity: 0;
  transition: 0.4s all ease;
}

.btn .burger-icon:first-of-type {
  margin-top: 0;
}

.btn .burger-icon:last-of-type {
  margin-bottom: 0;
}

.btn.active .burger-icon:first-of-type {
  transform: rotate(45deg);
  top: 10px;
  opacity: 1;
}

.btn.active .burger-icon:last-of-type {
  transform: rotate(-45deg);
  top: -6px;
  opacity: 1;
}
</style>
