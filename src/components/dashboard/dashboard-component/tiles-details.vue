<template>
     <div>
        <article class="countArticles">
            <div class="countArtText">
                <h2>{{title}}</h2>
                <p>{{data}}</p>
            </div>
            <div class="countArtIcon"> 
                <img :src="icon" />
            </div>
        </article>
     </div>
</template>

<script>
    export default{
        props:['title', 'data', 'icon'],
        data(){
            return{

            }
        }
    }
</script>