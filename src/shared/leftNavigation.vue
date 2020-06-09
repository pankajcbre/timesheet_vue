<template>
  <v-navigation-drawer app clipped :mini-variant="drawerValue">
    <v-list dense>
      <v-list-item v-for="(nav, i) in navItems" :key="i" :to="nav.routeLink" active-class="active">
        <v-list-item-action>
          <v-icon>{{nav.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{nav.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["drawerValue"],
  data() {
    return {
      navItems: [
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          routeLink: "/dashboard"
        },
        { icon: "mdi-note", title: "My Task", routeLink: "/task" },
        {
          icon: "mdi-calendar",
          title: "Holiday List",
          routeLink: "/holiday-list"
        },
        {
          icon: "mdi-calendar",
          title: "My Leave Plan",
          routeLink: "/LeavePlanner"
        },
        { icon: "mdi-clock", title: "My Timesheet", routeLink: "/timesheet" }
      ]
    };
  }
};
</script>