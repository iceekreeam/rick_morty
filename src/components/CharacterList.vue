<template>
  <section class="sectionStyle">
    <character-card
      v-for="character in $store.state.characterList"
      :key="character.id"
      :name="character.name"
      :image="character.image"
      @click="showDialog(character)"
    ></character-card>
    <base-modal
      :id="visibleCharacter.id"
      :status="visibleCharacter.status"
      :name="visibleCharacter.name"
      :species="visibleCharacter.species"
      :episode="visibleCharacter.episode"
      :location="visibleCharacter.location"
      :image="visibleCharacter.image"
      @close="hideDialog"
      :open="dialogIsVisible"
    >
      <!-- <button @click="hideDialog">Close it!</button> -->
    </base-modal>
  </section>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import BaseModal from "./BaseModal.vue";

export default {
  name: "CharacterList",
  components: { CharacterCard, BaseModal },
  data() {
    return {
      dialogIsVisible: false,
      visibleCharacter: {}
    };
  },
  methods: {
    showDialog(character) {
      this.dialogIsVisible = true;
      this.visibleCharacter = character;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleEpisodes() {}
  },
  mounted() {
    // if(this.$store.state.counter < 1){
    this.$store.dispatch("load", "https://rickandmortyapi.com/api/character");
    //     }else{
    //         return
    //     }
  }
};
</script>

<style>
.sectionStyle {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>