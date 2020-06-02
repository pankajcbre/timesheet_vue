<template>
  <div>
    <div class="rightSideHead">
      <h2>Activity Feed</h2>
    </div>
    <!--//rightSideHead-->

    <section class="activitySeciton">
      <h3>
        <span>10 May 2020</span>
      </h3>

      <v-timeline dense clipped>
        <v-timeline-item
          color="grey"
          icon-color="grey lighten-2"
          medium
          v-for="(activity, index) in activities"
          :Key="index"
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-row>
            <v-col cols="12">
              <h4>{{activity.activityTitle}}</h4>
              <h5 v-if="activity.projectName">{{activity.projectName}}</h5>
              <p>{{activity.time}}</p>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </section>

    <section class="activitySeciton">
      <h3>
        <span>09 May 2020</span>
      </h3>

      <v-timeline dense clipped>
        <v-timeline-item
          color="grey"
          icon-color="grey lighten-2"
          medium
          v-for="(activity, index) in activities"
          :Key="index"
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-row>
            <v-col cols="12">
              <h4>{{activity.activityTitle}}</h4>
              <h5 v-if="activity.projectName">{{activity.projectName}}</h5>
              <p>{{activity.time}}</p>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </section>

    <section class="activitySeciton">
      <h3>
        <span>08 May 2020</span>
      </h3>

      <v-timeline dense clipped>
        <v-timeline-item
          color="grey"
          icon-color="grey lighten-2"
          medium
          v-for="(activity, index) in activities"
          :Key="index"
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-row>
            <v-col cols="12">
              <h4>{{activity.activityTitle}}</h4>
              <h5 v-if="activity.projectName">{{activity.projectName}}</h5>
              <p>{{activity.time}}</p>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          activityTitle: "You added an Admin Task to your Time Sheet",
          projectName: "Project Name",
          time: "9:00 AM"
        },
        {
          activityTitle: "New task assigned to you.",
          projectName: "Project Name",
          time: "9:00 AM"
        },
        {
          activityTitle: "Steve approved your leave plan.",
          projectName: "",
          time: "9:00 AM"
        },
        {
          activityTitle: "David accepted your task transfer request.",
          projectName: "Project Name",
          time: "9:00 AM"
        }
      ]
    };
  }
};
</script>