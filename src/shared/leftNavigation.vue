<template> 
    <v-navigation-drawer app clipped :mini-variant="drawerValue">
        <v-list dense>
            <router-link to="/dashboard">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>


            <router-link to="/task">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-note</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>My Task</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            
            <router-link to="/holiday-list">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-calendar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Holiday List</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            
            <router-link to="/leave-plan">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-calendar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>My Leave Plan</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
            
            <router-link to="/timesheet">
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>mdi-clock</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>My Timesheet</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>        
</template>

<script>
    export default { 
        props:['drawerValue'],
        data(){
            return{
                
            }
        }
    }
</script>