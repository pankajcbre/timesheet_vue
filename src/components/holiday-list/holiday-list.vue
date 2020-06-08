<template>
  <v-container class="holi_day">
    <v-row>
      <v-col class="col-md-6">
        <h1 class="hdng_1">Holiday List - 2020</h1>
      </v-col>
      <v-col class="col-md-6">
        <div class="right_list">
          <v-list>
            <v-list-item>
              <v-select
                v-model="e1"
                :items="states"
                menu-props="auto"
                label="Select"
                hide-details
                prepend-icon="mdi-map-marker"
                single-line
              ></v-select>
            </v-list-item>
            <v-list-item>
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon>
                    <v-icon>mdi-calendar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <br />
    <v-row class="month_cards">
      <v-col class="col-md-3" v-for="month in months" :key="month.title">
        <v-card class="mx-auto">
          <h4>{{ month.monthName }}</h4>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="FestiveList in month.FestiveLists"
              :key="FestiveList.title"
            >
              <v-list-item-content>
                <b>{{ FestiveList.festiveDate }}</b>
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title
                  v-text="FestiveList.festiveName"
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon
                    color="grey lighten-1"
                    v-text="FestiveList.festiveIcon"
                  ></v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
      months: [
        {
          monthName: 'January',
          FestiveLists: [
            {
              festiveDate: '01',
              festiveName: 'New Year',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '14',
              festiveName: 'Makar Sankranti',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '26',
              festiveName: 'Republic Day',
              festiveIcon: 'mdi-flag',
            },
          ],
        },
        {
          monthName: 'February',
          FestiveLists: [
            {
              festiveDate: '02',
              festiveName: 'Maha Shivratri',
              festiveIcon: 'mdi-flag',
            },
          ],
        },
        {
          monthName: 'March',
          FestiveLists: [
            {
              festiveDate: '10',
              festiveName: 'Holi',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '22',
              festiveName: 'Gudipadava',
              festiveIcon: 'mdi-flag',
            },
          ],
        },
        {
          monthName: 'april',
          FestiveLists: [
            {
              festiveDate: '02',
              festiveName: 'Ram Navami',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '10',
              festiveName: 'Good Friday',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '13',
              festiveName: 'Baisakh',
              festiveIcon: 'mdi-flag',
            },
          ],
        },
        {
          monthName: 'May',
          FestiveLists: [
            {
              festiveDate: '01',
              festiveName: 'Gudipadava',
              festiveIcon: 'mdi-flag',
            },
            {
              festiveDate: '22',
              festiveName: 'Gudipadava',
              festiveIcon: 'mdi-flag',
            },
          ],
        },
        {
          monthName: 'June',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'July',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'August',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'September',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'October',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'November',
          FestiveLists: [{ name: 'check2.1' }, { name: 'check2.2' }],
        },
        {
          monthName: 'December',
          FestiveLists: [{ festiveName: 'New Year' }, { name: 'check2.2' }],
        },
      ],
    };
  },
};
</script>
