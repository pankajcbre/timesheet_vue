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
                    <div class="hoursLabels">
                        <span class="spent">Spent</span>
                        <span class="planned">Planned</span>
                    </div>
                    <app-hour-graph></app-hour-graph>
                </article>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="col-md-6"> 
                <v-row>
                    <v-col class="col-sm-6">
                        <app-tiles-details title="Total Task" data="786" :icon="icons.TaskIcon"></app-tiles-details>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <app-tiles-details title="Total Capacity" data="80hrs" :icon="icons.CapacityIcon"></app-tiles-details>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <app-tiles-details title="Hours Spent vs. Capacity" data="95/80" :icon="icons.HourIcon"></app-tiles-details>
                    </v-col>
                    
                    <v-col class="col-sm-6"> 
                        <app-tiles-details title="Leaves Applied in May" data="03" :icon="icons.LeaveIcon"></app-tiles-details>
                    </v-col>
                </v-row>
            </v-col>
            
            <v-col class="col-md-6"> 
                <v-row>
                    <v-col class="col-sm-12"> 
                        <article class="taskVelArticle">
                            <h2>Tasks Velocity </h2>
                            <v-row class="no-gutters">
                                <v-col class="col-sm-5 taskLabels">
                                    <ul>
                                        <li class="done">Done <span>42</span></li>
                                        <li class="reOpen">Re-Open <span>39</span></li>
                                        <li class="inProgress">In Progress <span>34</span></li>
                                        <li class="onHold">On Hold <span>23</span></li> 
                                    </ul>
                                </v-col>
                                <v-col class="col-sm-7">
                                    <div class="velocityTaskBox">
                                        <app-task-velocity style="width:155px; margin:0 auto"></app-task-velocity>
                                    </div>
                                </v-col>
                            </v-row>
                        </article>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>


        <div class="teamSection">
            <h2>Resources List</h2>
            <v-row>
                <v-col class="col-md-4 col-lg-2" v-for="(resource, i) in resources" :key="i">                   
                    <app-resource-list :resourceData="resource"></app-resource-list>                  
                </v-col> 
            </v-row>
        </div>
        
    </div>
</template>

<script>
    import HourGraph from './../../shared/graphs/hour-graph'; 
    import TaskVelocity from './../../shared/graphs/task-velocity'
    import ResourceList from './dashboard-component/resource-list'
    import TilesDetails from './dashboard-component/tiles-details'

    import AvatarIcon  from './../../assets/images/resource-avatar-img.png'
    import TaskIcon  from './../../assets/images/task-icon.png'
    import CapacityIcon  from './../../assets/images/capacity-icon.png'
    import HourIcon  from './../../assets/images/hour-icon.png'
    import LeaveIcon  from './../../assets/images/leave-icon.png'

    export default {
        components:{
            'app-hour-graph': HourGraph,
            'app-task-velocity': TaskVelocity,
            'app-resource-list': ResourceList,
            'app-tiles-details':TilesDetails
        },
        data () {
            return {
                resources:[
                    {name:'Elliot Møller', title:'Associate', avatarImg: AvatarIcon},
                    {name:'Olivia Pedersen', title:'Associate', avatarImg:AvatarIcon},
                    {name:'Niklas Döring', title:'Associate', avatarImg:AvatarIcon},
                    {name:'Elliot Møller', title:'Associate', avatarImg:AvatarIcon},
                    {name:'Olivia Pedersen', title:'Associate', avatarImg:AvatarIcon},
                    {name:'Elliot Møller', title:'Associate', avatarImg:AvatarIcon},
                ],
                icons:{
                    TaskIcon : TaskIcon,
                    CapacityIcon : CapacityIcon,
                    HourIcon : HourIcon,
                    LeaveIcon : LeaveIcon
                },
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