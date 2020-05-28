<template>
  <v-container>
    <v-row>
      <v-col class="col-md-8">
        <div>
          <v-text-field
            label="Solo"
            placeholder="Searcg any Project, Task, Sector or Employee"
            solo
            append-icon="mdi-magnify"
          ></v-text-field>
        </div>
      </v-col>
      <v-col class="col-md-4">
        <div class="right_list">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Refresh</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-refresh</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Filter boards</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-filter</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>

    <template>
      <h1 class="hdng_1">My Tasks</h1>
    </template>
    <v-data-table :headers="headers" :items="items" sort-by class="elevation-1">
      <template v-slot:item.actions>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" small>mdi-dots-vertical</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items2" :key="index" @click="abc">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "PROJECT TITLE", value: "projectname" },
        { text: "TASK TYPE", value: "tasktype" },
        { text: "ASSIGNMENT TYPE", value: "assignmenttype" },
        { text: "SUB TYPE", value: "subtype" },
        { text: "ROLE", value: "role" },
        { text: "HRS SPENT", value: "hrsspent" },
        { text: "STATUS", value: "status" },
        { text: "DEADLINE", value: "deadline" },
        { text: "", value: "actions", sortable: false }
      ],
      items: [
        {
          projectname: "Business Development & Opportunities",
          tasktype: "Proposal/Pitch",
          assignmenttype: "Core_Consulting",
          subtype: "Country & City Level Assessment",
          role: "Role 01",
          hrsspent: "0hrs",
          status: "Active",
          deadline: "12/05/2020"
        },
        {
          projectname: "Business Development & Opportunities",
          tasktype: "Proposal/Pitch",
          assignmenttype: "Core_Consulting",
          subtype: "Country & City Level Assessment",
          role: "Role 01",
          hrsspent: "0hrs",
          status: "Active",
          deadline: "12/05/2020"
        },
        {
          projectname: "Business Development & Opportunities",
          tasktype: "Proposal/Pitch",
          assignmenttype: "Core_Consulting",
          subtype: "Country & City Level Assessment",
          role: "Role 01",
          hrsspent: "0hrs",
          status: "Active",
          deadline: "12/05/2020"
        },
        {
          projectname: "Business Development & Opportunities",
          tasktype: "Proposal/Pitch",
          assignmenttype: "Core_Consulting",
          subtype: "Country & City Level Assessment",
          role: "Role 01",
          hrsspent: "0hrs",
          status: "Active",
          deadline: "12/05/2020"
        },
        {
          projectname: "Business Development & Opportunities",
          tasktype: "Proposal/Pitch",
          assignmenttype: "Core_Consulting",
          subtype: "Country & City Level Assessment",
          role: "Role 01",
          hrsspent: "0hrs",
          status: "Active",
          deadline: "12/05/2020"
        }
      ],
      items2: [
        { title: "Edit" },
        { title: "Delete" },
        { title: "Update" },
        { title: "Add" }
      ]
    };
  }
};
</script>
