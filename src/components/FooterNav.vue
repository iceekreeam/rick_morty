<template>
<footer class="footerNav" style="">
    <button v-if="$store.state.pageInfo.prev" @click="loadPage($store.state.pageInfo.prev)">Previous Page</button>
    <p>Page: {{$store.state.pageNumber}} </p>
    <button @click="loadPage($store.state.pageInfo.next)">Next Page</button>
</footer>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loadPage(url){
             this.$store.dispatch('load',url)
        }
    }
}
</script>


<style>
.footerNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #101010;
    color:white;
    
}
</style>

