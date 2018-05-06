<template>
  <div class="app-content">
    <Menu></Menu>
    <h2 v-once>{{appTitle}}</h2>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'HelloWorld',
  components: {
    Menu,
  },
  data() {
    return {
      appTitle: "Marvel list app",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.red {
  color: red;
}

.app-content {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
}
</style>
