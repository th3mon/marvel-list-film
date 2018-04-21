<template>
    <div id="matiTest">
        <span> {{ message }} </span>
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
