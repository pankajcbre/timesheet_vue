<template>
  <v-container>
    <v-data-table :headers="headers" :items="items" sort-by class="elevation-1">
      <!-- <template v-slot:top>
            <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.projectname" label="Project Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.assignmenttype" label="Assignment Type"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.assignmentsubtype"
                            label="Assignment Sub Type"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.tasktype" label="Task Type"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.role" label="Role"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
      </template>-->
      <template></template>

      <template v-slot:item.assignmenttype="props">
        <v-select
          :items="assignmenttype"
          v-model="props.item.assignmenttype"
          label="Assignment Type"
          dense
          outlined
        ></v-select>
      </template>
      <template v-slot:item.assignmentsubtype="props">
        <v-select
          :items="assignmentsubtype"
          v-model="props.item.assignmenttype"
          label="Assignment Sub Type"
          dense
          outlined
        ></v-select>
      </template>
      <template v-slot:item.tasktype="props">
        <v-select
          :items="tasktype"
          v-model="props.item.assignmenttype"
          label="Assignment Sub Type"
          dense
          outlined
        ></v-select>
      </template>
      <template v-slot:item.role="props">
        <v-select
          :items="role"
          v-model="props.item.assignmenttype"
          label="Assignment Sub Type"
          dense
          outlined
        ></v-select>
      </template>
      <template v-slot:item.startendtime="props">
        <v-text-field v-model="props.item.startendtime"></v-text-field>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
      <template v-slot:item.startendtime>
        <!-- {{item.time}} -->
        <!-- :return-value.sync="getTime" -->
        <v-dialog
          ref="dialog"
          class="bg-theme-white px-4 py-3"
          v-model="modal2"
          persistent
          width="750px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="start"
              label="Picker in dialog"
              append-icon="mdi-timer"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <div v-if="modal2" full-width style="background:#fff;" class="px-4 py-3">
            <h1>Plan your Tak Hours:</h1>
            <v-row justify="space-around" align="center">
              <v-col>
                <h2>Start:</h2>
                <v-time-picker v-model="start" :max="end"></v-time-picker>
              </v-col>
              <v-col>
                <h2>End:</h2>
                <v-time-picker v-model="end" :min="start"></v-time-picker>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-dialog>
        <!-- <v-icon @click="stopWatch(item)">mdi-timer</v-icon> -->
      </template>
      <template v-slot:item.actions="{item}">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menu2: false,
    modal2: false,
    start: [],
    end: null,
    time: null,
    assignmenttype: [
      "select option 1",
      "select option 2",
      "select option 3",
      "select option 4"
    ],
    assignmentsubtype: [
      "select option 1",
      "select option 2",
      "select option 3",
      "select option 4"
    ],
    tasktype: [
      "select option 1",
      "select option 2",
      "select option 3",
      "select option 4"
    ],
    role: [
      "select option 1",
      "select option 2",
      "select option 3",
      "select option 4"
    ],
    items: [],
    headers: [
      { text: "PROJECT", value: "projectname" },
      { text: "ASSIGNMENT TYPE", value: "assignmenttype" },
      { text: "ASSIGNMENT SUB TYPE", value: "assignmentsubtype" },
      { text: "TASK TYPE", value: "tasktype" },
      { text: "ROLE", value: "role" },
      { text: "START TIME - END TIME", value: "startendtime" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    tasklists: {
      name: "tasklists",
      items: [
        {
          id: 0,
          projectname: "Business Development & Opportunities",
          assignmenttype: "",
          assignmentsubtype: "",
          tasktype: "",
          role: "",
          startendtime: "",
          time: "9:30 - 12:30"
        },
        {
          projectname: "Business Development Opportunities",
          assignmentType: "",
          assignmentSubType: "",
          taskType: "",
          role: "",
          startEndTime: "",
          time: "9:30 - 12:30"
        },
        {
          projectname: "Business Development & Opportunities",
          assignmentType: "",
          assignmentSubType: "",
          taskType: "",
          role: "",
          startEndTime: "",
          time: "11:30 - 12:30"
        }
      ]
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      const items = [...this.tasklists.items];
      this.$emit("deleteItem", this.deleteItem);
      this.$emit("editItem", this.editItem);
      // deep copy is the solution
      // const items = JSON.parse(JSON.stringify(this.tasklists.items))

      items.map(item => {
        //item.assignmentType = "";
        return item;
      });
      this.items = items;
    }
  }
};
</script>