<template>
  <div class="addMovie">
    <div class="top-wrapper">
    <input id="character-input" v-model="characterName" type="text" placeholder="Wprowadź bohatera" />
    <a v-on:click="addCharacter(characterName)" href="#">
      +
    </a>
    <div class="error-wrapper" v-bind:class="{error: addItem}">
      <p>Nic nie wpisałeś</p>
    </div>
    </div>
    <ul class="character-list">
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
  name: "AddMovie",
  data() {
    return {
      addItem: false,
      listItems: []
    };
  },
  methods: {
    addCharacter(value) {
      event.preventDefault();
      if (this.characterName.length) {
        this.$data.listItems.push(value);
        this.characterName = "";
        this.$data.addItem = false;
      } else {
        this.$data.addItem = true;
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Marvel:400,700");
.error-wrapper {
  transform: scale(0.1);
  opacity: 0;
  transform-origin: top;
  transition: 0.5s all ease;
  margin: 0;
  position: relative;
  padding-top: 0;
}
.error-wrapper.error {
  padding-top: 10px;
  transform: scale(1.1);
  opacity: 1;
}

.error-wrapper p {
  margin: 0;
}

.character-list {
  margin: 0;
  padding: 0;
  list-style: none;
  padding-top: 30px;
}

.character-list li {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  font-family: "Marvel", sans-serif;
}

.character-list li a {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  display: inline-block;
  margin: 5px 0;
}

.character-list li a:hover {
  color: #e23636;
}
</style>
