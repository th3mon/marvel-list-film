
<template>
    <div class="addMovie">
        <input v-model="characterName" type="text" placeholder="Wprowadź bohatera" />
        <a v-on:click="addCharacter(characterName, $event)" href="#">
            +
        </a>
        <ul>
            <li v-for='singleItem in listItems' v-bind:key='singleItem.listItem'>
            <a href="#">
                {{singleItem.listItem}}
            </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      characterName: "",
      listItems: []
    };
  },
  methods: {
    addCharacter(value, event) {
      event.preventDefault();
      const inputValue = value;
      const actualList = [this.$data.listItems];
    },
  }
};
</script>
