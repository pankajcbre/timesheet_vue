<template>
    <div>
        <v-row>
            <v-col class="col-7" > 
                <v-autocomplete
                    v-model="select"
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    cache-items 
                    flat
                    hide-no-data
                    hide-details
                    label="Search any Project, Task, Sector or Employee"
                    solo-inverted
                    >
                </v-autocomplete>
            </v-col>
            <v-col class="col-5" >
                 
            </v-col>
        </v-row>

        <v-row>
            <v-col class="col-12">
                <article class="whiteBox">
                    <h2>Hours Spent vs. Planned</h2>
                    <app-hour-graph></app-hour-graph>
                </article>
            </v-col>
        </v-row>

        

        <v-row>
            <v-col class="col-md-6"> 
                <v-row>
                    <v-col class="col-sm-6"> 
                        <article class="countArticles">
                            <div class="countArtText">
                                <h2>Total Task</h2>
                                <p>786</p>
                            </div>
                            <div class="countArtIcon">

                            </div>
                        </article>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <article class="countArticles">
                            <div class="countArtText">
                                <h2>Total Capacity</h2>
                                <p>80hrs</p>
                            </div>
                            <div class="countArtIcon">
                                
                            </div>
                        </article>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <article class="countArticles">
                            <div class="countArtText">
                                <h2>Hours Spent vs. Capacity</h2>
                                <p>95/80</p>
                            </div>
                            <div class="countArtIcon">
                                
                            </div>
                        </article>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <article class="countArticles">
                            <div class="countArtText">
                                <h2>Leaves Applied in May</h2>
                                <p>03</p>
                            </div>
                            <div class="countArtIcon">
                                
                            </div>
                        </article>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="col-md-6"> 
                <v-row>
                    <v-col class="col-sm-12"> 
                        <article class="taskVelArticle">
                            <h2>Tasks Velocity </h2>
                            <app-task-velocity style="width:250px"></app-task-velocity>
                        </article>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
    import HourGraph from './../../shared/graphs/hour-graph'; 
    import TaskVelocity from './../../shared/graphs/task-velocity'

    export default {
        components:{
            'app-hour-graph': HourGraph,
            'app-task-velocity': TaskVelocity
        },
        data () {
            return {
                loading: false,
                items: [],
                search: null,
                select: null,
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
            }
        },
        watch: {
            search (val) {
                val && val !== this.select && this.querySelections(val)
            },
        },
        methods: {
            querySelections (v) {
                this.loading = true
                // Simulated ajax query
                setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
                }, 500)
            },
        },
    }
</script>