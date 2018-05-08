<template>
  <div class="addMovie">
    <input v-model="characterName" type="text" placeholder="Wprowadź bohatera" />
    <a v-on:click="addCharacter(characterName)" href="#">
      +
    </a>
    <ul>
      <li v-for='singleItem in listItems' v-bind:key='singleItem.listItem'>
      <a href="#">
        {{singleItem}}
      </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AddMovie',
  data() {
    return {
      characterName: '',
      listItems: ['hulk'],
    };
  },
  methods: {
    addCharacter(value) {
      event.preventDefault();

      this.$data.listItems.push(value);
    },
  },
};
</script>
