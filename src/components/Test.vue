<template>
    <div id="button">
        <button v-once>{{message}}</button>
    </div>
</template>

<script>
export default { 
  name: 'Button',
  data() {
      return {
          message: "Pierwszy dodany komponent"
      };
  }
};
</script>
