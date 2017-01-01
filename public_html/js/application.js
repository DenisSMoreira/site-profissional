$(function () {
                Highcharts.theme = {
                    colors: ["#687851", "#302437", "#54b5df", "#f2933f", "#cd3c49"],
                    chart: {
                        backgroundColor: {
                            linearGradient: {x1: 0, y1: 0, x2: 1, y2: 1},
                            stops: [
                                [0, '#ffffff'],
                                [1, '#ffffff']
                            ]
                        },
                        style: {
                            fontFamily: "'Unica One', sans-serif"
                        },
                        plotBorderColor: '#ffffff'
                    },
                    xAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'

                            }
                        }
                    },
                    yAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        tickWidth: 1,
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        }
                    },
                    labels: {
                        style: {
                            color: '#1c1c1c'
                        }
                    },
                    // special colors for some of the

                    background2: '#1c1c1c',
                    dataLabelsColor: '#B0B0B3',
                    textColor: '#C0C0C0',
                    contrastTextColor: '#F0F0F3'
                };

                // Apply the theme
                Highcharts.setOptions(Highcharts.theme);
                new Highcharts.Chart({
                    chart: {
                        renderTo: 'containerDonut',
                        type: 'pie'
                    },
                    plotOptions: {
                        pie: {
                            borderColor: '#ffffff',
                            innerSize: '55%'
                        },
                        series: {
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        }
                    }, title: {
                        text: ''
                    }, tooltip: {
                        enabled: false
                    }, credits: {
                        enabled: false,
                        shadow: false
                    },
                    series: [{
                            data: [
                                ['<b>Responsável</b>', 15],
                                ['<b>Busca de<br>Conhecimento</b>', 30],
                                ['<b>Proativo</b>', 20],
                                ['<b>Focado</b>', 20],
                                ['<b>Criativo</b>', 15]
                            ]}]

                });
            });