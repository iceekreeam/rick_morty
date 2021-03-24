import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios';


const store = new Vuex.Store({
    state() {
        return {
            characterList: [],
            pageInfo: {},
            counter: 0,
            pageNumber:'1'
            
        }
    },
    mutations: {
        loadCharacterList(state, value) {
            state.characterList = value;
         },
        loadPageInfo(state, value){
            state.pageInfo = value;
        },
        updatePageNumber(state,value){
            state.pageNumber = value;
        }
    },

    actions: {
        load(context, url) {
            let pageNumber= ''
            const pageExists = url.includes("=");
            console.log(pageExists)
            if(pageExists==true){
              pageNumber = url.split("=").pop();
              context.commit('updatePageNumber', pageNumber);
            }
             
            axios.get(url).then((response) => {
                return response;
            }).then((response) => { 
                context.commit('loadPageInfo', response.data.info)
                const results = [];
                for (const id in response.data.results) {
                    results.push(response.data.results[id]);
                }
                return context.commit('loadCharacterList', results)
            }).catch((error) => {
                console.log(error);
            });
        }


    }

});

const app = createApp(App);
app.use(store);
app.mount('#app');
