<template>
  <v-app>
    <app-left-nav :drawerValue="drawer"></app-left-nav>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <strong>MANPOWER</strong>TEMPLATE
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="mainContainer" fluid>
        <div class="pages">
          <router-view @deleteItem="deleteItem" @close="close" @save="save" @editItem="editItem"></router-view>
        </div>
        <!--//pages-->

        <div class="rightSidebar">
          <app-right-side></app-right-side>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LeftNavigation from "./shared/leftNavigation.vue";
import RightSidebar from "./shared/rightSidebar.vue";

export default {
  components: {
    "app-left-nav": LeftNavigation,
    "app-right-side": RightSidebar
  },
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.tasklists.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.tasklists.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.tasklists.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tasklists[this.editedIndex], this.editedItem);
      } else {
        this.tasklists.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
