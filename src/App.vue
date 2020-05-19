<template>
  <v-app>     
    <app-left-nav :drawerValue="drawer"></app-left-nav>
    
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Manpower App</v-toolbar-title>
    </v-app-bar>
 
  <v-content>
    <v-container fluid>
      <router-view></router-view>         
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
  import LeftNavigation from './shared/leftNavigation.vue'; 

  export default {
    components:{
      'app-left-nav' : LeftNavigation, 
    },
    data(){
      return{
        drawer: true,
      }
    },
    methods:{ 
      
    }
  };
</script>
