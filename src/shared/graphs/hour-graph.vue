<template> 
    <line-chart></line-chart> 
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

    Vue.component('line-chart', {
        extends: VueChartJs.Line,
        mounted () {
            this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                label: 'Spent',
                backgroundColor: '#BCC8D5',
                data: [40, 39, 50, 40, 39, 70, 40]
                },
                {
                label: 'Planned',
                backgroundColor: '#F0F2F8',
                data: [50, 60, 30, 65, 40, 70, 60]
                }
            ]
            }, {responsive: true, maintainAspectRatio: false, legend:false})
        }
    
    })
</script>