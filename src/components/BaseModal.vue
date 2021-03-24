<template>
  <div>
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>
    <transition name="base">
      <dialog open v-if="open">
        <div>
          <div class="dialogParent">
            <p>
              <strong>Name:</strong>
              {{name}}
            </p>
            <button class="exitButton" @click="$emit('close')">Exit</button>
          </div>
          <div>
            <img class="dialogImage" :src="image" />
            <div class="detailsList">
              <div>
                <strong>Species:</strong>
                {{species}}
              </div>
              <div>
                <strong>Location:</strong>
                {{location.name}}
              </div>
              <div>
                <strong>Status:</strong>
                {{status}}
              </div>
              <button @click="episodeList(episode)">Episodes</button>
            </div>
            <transition>
              <div class="episodesList" style="" v-if="episodeVisible">
                <div v-for="episodeTitle in allEpisodes" :key="episodeTitle.id">
                  <ul>
                    <li style="padding:0px;">
                      <a style="margin:5px;" :href="episodeTitle.episodeUrl" target="_blank" >{{episodeTitle.episodeTitle}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </dialog>
    </transition>
  </div>
</template>
<script>
export default {
  props: [
    "open",
    "name",
    "image",
    "species",
    "episode",
    "location",
    "status",
    "id"
  ],
  emits: ["close"],
  data() {
    return {
      episodeVisible: false,
      allEpisodes:[]
    };
  },
  methods: {
    episodeList(item) {
      this.episodeVisible = !this.episodeVisible;
      this.allEpisodes =[];
      this.getEpisode(item);
    },
    getEpisode(list){
      let newEpisode={};
      for (newEpisode of list){
      let number = newEpisode.split("/", 6).pop();
      console.log(number);
      this.allEpisodes.push({
          id:Date.now(),
          episodeUrl: newEpisode,
          episodeTitle: 'Episode '+ number
        });
      }
     
      
    }
    
  }
};
</script>

<style>
.dialogParent {
  display: flex;
  justify-content: space-between;
}
.exitButton {
  padding: 5px;
  height: 27px;
}
.dialogImage {
  width: 25%;
  height: 25%;
  float: left;
  margin-right: 10px;
}
.detailsList {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 20rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}
.episodesList{
  display:flex; flex-wrap:wrap; 
}
ul {
  list-style-type: none;
  overflow-y: auto;
  padding:0px;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media only screen and (max-width: 600px) {
  dialog {
    top: 30vh;
    left: calc(68% - 15rem);
  }
}

@media only screen and (max-width: 350px) {
  dialog {
    top: 30vh;
    left: calc(76% - 15rem);
  }
}

@keyframes main-dialog {
  0% {
  }
}
</style>

