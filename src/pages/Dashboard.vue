<template>
  <div>
    <v-app-bar color="green darken-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CBRE Timesheet</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col class="mt-4">
          <DashboardC />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DashboardC from "@/components/DashboardC.vue";
export default {
  name: "Dashboard",
  components: {
    DashboardC
  }
};
</script>

<style scoped>
h1 {
  color: white;
}
</style>