<template>
  <div v-if="Math.random() > 0.2" class="hello">
    <h2>{{ headerMessage }}</h2>
  </div>
  <div v-else>
    <h2 v-html="headerMessage" class="red"></h2>
  </div>
</template>

<script>
import Button from './Test';
export default {
  name: "HelloWorld",
  components: {Button},
  data() {
    return {
      headerMessage: "Todo listdasdasd",
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
</style>
