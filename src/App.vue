<template>
  <v-app>     
    <app-left-nav :drawerValue="drawer"></app-left-nav>
    
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><strong>MANPOWER</strong>TEMPLATE</v-toolbar-title>
    </v-app-bar>
 
  <v-content>
    <v-container class="mainContainer" fluid>
      <div class="pages">
        <router-view></router-view>
      </div><!--//pages-->
       
      <div class="rightSidebar">
        <app-right-side></app-right-side>
      </div>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
  import LeftNavigation from './shared/leftNavigation.vue'; 
  import RightSidebar from './shared/rightSidebar.vue'; 

  export default {
    components:{
      'app-left-nav' : LeftNavigation, 
      'app-right-side' : RightSidebar
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
