<template>
  <div class="app-content">
    <Menu></Menu>
    <AddMovie></AddMovie>
  </div>
</template>

<script>
import Menu from './Menu';
import AddMovie from './AddMovie';

export default {
  name: 'HelloWorld',
  components: {
    Menu, AddMovie,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin: 10px 0;
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
