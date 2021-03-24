<template>
    <section style="margin: .5rem">
        <p>{{name}}</p>
        <img :src="image" />
        
    </section>
</template>
<script>
export default {
    props:['name','image'],
    name:"CharacterCard",
    data(){
        return{

        }
    },
   methods:{

   }
}
</script>