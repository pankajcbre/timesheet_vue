<template>
    <div class="teamBox">
        <div class="teamPic">
            <img :src="resourceData.avatarImg"> 
        </div>
        <div class="teamText">
            <strong>{{resourceData.name}}</strong><br>
            {{resourceData.title}}
        </div>
    </div>
</template>

<script>
    export default{
        props:['resourceData'],
        data(){
            return{

            }
        }
    }
</script>