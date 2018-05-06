<template>
  <div id="menu" class="nav-top">
    <button v-on:click="toggleClass" class="btn" v-bind:class="{active: isActive}">
      przycisk
    </button>
    <ul class="menu-content" v-bind:class="[isActive ? 'active' : 'hidden', errorClass]">
      <li>content</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
    data() {
    return {
      show: false,
      isActive: false,
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    }
  }
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
.nav-top {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 10px 15px;
  justify-content: flex-end;
}
.menu-content {
  width: 200px;
  height: 100%;
  background-color: black;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
}

.menu-content.hidden {
  display: none;
}

.menu-content.active {
  display: block;
}

.btn {
  background-color: #000;
  color: #fff;
  z-index: 1001;
}
</style>
