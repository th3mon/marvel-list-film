<template>
    <div class="addMovie">
        <input v-model="characterName" type="text" placeholder="Wprowadź bohatera" />
        <a v-on:click="addCharacter(characterName, $event)" href="#">
            +
        </a>
    </div>
</template>

<script>
export default { 
  name: 'AddMovie',
  data () {
      return {
          characterName: '',
      };
  },
  methods: {
      addCharacter (value, event) {
          event.preventDefault();
      }
  }
};
</script>
