<template> 
    <doughnut-chart></doughnut-chart> 
</template>

<script>
    import Vue from 'vue'
    import VueChartJs  from 'vue-chartjs'
    export default{
        data(){
            return{

            }
        },
        
    }

    Vue.component('doughnut-chart', {
        extends: VueChartJs.Doughnut,
        mounted () {
            this.renderChart({
            labels: ['Done', 'Re-Open', 'In Progress', 'On Hold'],
            datasets: [
                {
                    label: 'Task Velocity',
                    backgroundColor: ['#8699AD', '#B8C6D5', '#D3DCE5','#EFEFF7' ],
                    data: [109, 20, 15, 10], 
                }
            ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    
    })
</script>