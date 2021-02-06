<template>
    <div class="chart" :style="{height:height,width:width}" />
</template>

<script>
    import echarts from 'echarts'
    import resize from './mixins/resize'
    export default {
        mixins: [resize],
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '400px'
            },
            chartData: {
                type: Array,
                required: true
            },
            chartTitle: {
                type: String,
                default: ''
            },
            seriesName: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                chart: null,
            }
        },
        watch: {
            chartData: {
                deep: true,
                handler(val) {
                    this.setOptions(val)
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initChart()
            })
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose()
            this.chart = null
        },
        methods: {
            initChart() {
                this.chart = echarts.init(this.$el, 'light')
                this.setOptions(this.chartData)
            },
            setOptions(chartData) {
                if (this.chart) {
                    this.chart.setOption({
                        title: {
                            text: this.chartTitle,
                            left: 'center',
                            top: 40,
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            top: 'bottom',
                            right: 140
                        },
                        series: [{
                            name: this.seriesName,
                            type: 'pie',
                            radius: '50%',
                            data: chartData,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    })
                }
            },
        }
    }
</script>