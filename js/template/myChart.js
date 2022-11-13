var ctx = document.getElementById('myChart');
ctx.width = 778;
ctx.height = 388;
let graphVal1;
let graphVal2;
let graphVal3;
let fristChoice = true,
    labeldChoice,
    dataChoice,
    col_1_data = [],
    col_1_name = [],
    col_2_data = [],
    col_2_name = [],
    col_3_data = [],
    col_3_name = [],
    selected_data = [],
    selected_labels = [],
    selected_points = [],
    x_axis_name,
    y_axis_name,
    creationChart = false,
    selectedCart,
    selected_data_multi = [],
    dataChoiceMulti,
    lastChart = 0;

var barGraph = {
    type: 'bar',
    data: {
        labels: selected_labels,
        datasets: [{
            data: selected_data,
            backgroundColor: [
                '#df4177',
            ],
            borderColor: [
                '#df4177',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            y: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1,
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 22
                    },
                }
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 20
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var HorizantalBarGraph = {
    type: 'bar',
    data: {
        labels: selected_labels,
        datasets: [{
            data: selected_data,
            backgroundColor: [
                '#df4177',
            ],
            borderColor: [
                '#df4177',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1,
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 22
                    },
                }
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 20
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var scatterPlot = {
    type: 'scatter',
    data: {
        datasets: [{
            data: selected_data,
            backgroundColor: [
                '#df4177',
            ],
            borderColor: [
                '#df4177',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            y: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1
                },
                type: 'linear',
                position: 'bottom'
            },
            x: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1
                },
                type: 'linear',
                position: 'bottom'
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 25
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var lineGraph = {
    type: 'line',
    data: {
        datasets: [{
            data: selected_data,
            backgroundColor: [
                '#df4177',
            ],
            borderColor: [
                '#df4177',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1
                },
                type: 'linear',
                position: 'bottom'
            },
            y: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1
                },
                type: 'linear',
                position: 'bottom'
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 20
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var pieGraph = {
    type: 'pie',
    data: {
        labels: selected_labels,
        datasets: [{
            data: selected_data,
            backgroundColor: [
                '#3296D2', '#3CC8AF', '#69BE28', '#FFC800', '#F57300', '#DC1E30',
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 3
        }]
    },
    options: {
        aspectRatio: 1.5,
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 20
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var doubleBarGraph = {
    type: 'bar',
    data: {
        labels: selected_labels,
        datasets: [{
                // label: 'Dataset 1',
                data: selected_data,
                backgroundColor: [
                    '#FEBD0A',
                ],
                // borderColor: [
                //     '#df4177',
                // ],
                // borderWidth: 1
            },
            {
                // label: 'Dataset 2',
                data: selected_data_multi,
                backgroundColor: [
                    '#63AF3D',
                ],
                // borderColor: [
                //     '#df4177',
                // ],
                // borderWidth: 1
            },

        ]
    },
    options: {
        indexAxis: 'x',
        scales: {
            y: {
                min: 0,
                max: 10,
                ticks: {
                    font: {
                        size: 22
                    },
                    stepSize: 1
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 22
                    },
                }
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                titleFont: {
                    size: 25
                },
                bodyFont: {
                    size: 20
                },
                footerFont: {
                    size: 20 // there is no footer by default
                }
            }
        }
    }
}

var myChart = new Chart(ctx);

function updateCol1(val1, index) {
    col_1_data[index] = $(val1).val();
    col_1_name[index] = $(val1).val();
    if (labeldChoice == 1) {
        choiceLabels(1);
    } else if (dataChoice == 1) {
        choiceData(1);
    }
    if (dataChoiceMulti == 1) {
        choiceDataMulti(1);
    }
}

function updateCol2(val2, index) {
    col_2_data[index] = $(val2).val();
    col_2_name[index] = $(val2).val();
    if (labeldChoice == 2) {
        choiceLabels(2);
    } else if (dataChoice == 2) {
        choiceData(2);
    }
    if (dataChoiceMulti == 2) {
        choiceDataMulti(2);
    }
}

function updateCol3(val3, index) {
    col_3_data[index] = $(val3).val();
    col_3_name[index] = $(val3).val();
    if (labeldChoice == 3) {
        choiceLabels(3);
    } else if (dataChoice == 3) {
        choiceData(3);
    }
    if (dataChoiceMulti == 3) {
        choiceDataMulti(3);
    }
}

function choiceData(choice) {
    const axisWrapperChilds = $(".axisWrapper div");
    if (choice == '1') {
        dataChoice = 1;
        y_axis_name = 'Column A'
        selected_data = col_1_data;
        fristChoice ? $('#col11').attr('checked', true) : '';
        fristChoice ? $('#col111').attr('checked', true) : '';
        $(axisWrapperChilds[1]).text("Column A");
    } else if (choice == '2') {
        dataChoice = 2;
        y_axis_name = 'Column B'
        selected_data = col_2_data;
        fristChoice ? $('#col22').attr('checked', true) : '';
        fristChoice ? $('#col222').attr('checked', true) : '';
        $(axisWrapperChilds[1]).text("Column B");
    } else if (choice == '3') {
        dataChoice = 3;
        y_axis_name = 'Column C'
        selected_data = col_3_data;
        fristChoice ? $('#col33').attr('checked', true) : '';
        fristChoice ? $('#col333').attr('checked', true) : '';
        $(axisWrapperChilds[1]).text("Column C");
    }
    if (creationChart) {
        myChart.data.labels = selected_labels;
        myChart.data.datasets[0].data = selected_data;
    }
    if (selected_data != []) {
        if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'x')
            selectedCart.options.scales.y.max = Math.max(...selected_data) + 1; //bar   
        else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'y')
            selectedCart.options.scales.x.max = Math.max(...selected_data) + 1; //hbar   
        else if (selectedCart.type == 'scatter' || selectedCart.type == 'line') {
            selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
            selectedCart.options.scales.x.max = Math.max(...selected_labels) + 1;
        } else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length > 1) {
            if (Math.max(...selected_data_multi) > Math.max(...selected_data)) {
                selectedCart.options.scales.y.max = Math.max(...selected_data_multi) + 10;
            } else {
                selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
            }
        }
    }
    fristChoice ? choiceLabels(choice) : updateLabel();
    fristChoice ? fristChoice = false : '';
    changeName();
}

function choiceDataMulti(choice) {
    const axisWrapperChilds = $(".axisWrapper div");
    if (choice == '1') {
        dataChoiceMulti = 1;
        selected_data_multi = col_1_data;
        $(axisWrapperChilds[2]).text("Column A");

    } else if (choice == '2') {
        dataChoiceMulti = 2;
        selected_data_multi = col_2_data;
        $(axisWrapperChilds[2]).text("Column B");

    } else if (choice == '3') {
        dataChoiceMulti = 3;
        selected_data_multi = col_3_data;
        $(axisWrapperChilds[2]).text("Column C");

    }
    if (creationChart) {
        myChart.data.labels = selected_labels;
        myChart.data.datasets[1].data = selected_data_multi;
    }
    if (selected_data_multi != []) {
        if (Math.max(...selected_data_multi) > Math.max(...selected_data)) {
            selectedCart.options.scales.y.max = Math.max(...selected_data_multi) + 1;
        } else {
            selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
        }
    }
    fristChoice ? choiceLabels(choice) : updateLabel();
    fristChoice ? fristChoice = false : '';
    changeName();

    if ($(".data_radio_multi input:checked").length === 0 && $(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
        $(".ok_button").css("opacity", "0.6");
        $(".ok_button").attr("disabled", true);
    } else {
        $(".ok_button").css("opacity", "1");
        $(".ok_button").attr("disabled", false);
    }
}

function choiceLabels(choice) {
    const axisWrapperChilds = $(".axisWrapper div");
    if (choice == '1') {
        labeldChoice = 1;
        x_axis_name = 'Column A'
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_1_name[i] === 'undefined' ? '' : col_1_name[i];
        }
        $(axisWrapperChilds[0]).text("Column A");
    } else if (choice == '2') {
        labeldChoice = 2;
        x_axis_name = 'Column B'
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_2_name[i] === 'undefined' ? '' : col_2_name[i];
        }
        $(axisWrapperChilds[0]).text("Column B");
    } else if (choice == '3') {
        labeldChoice = 3;
        x_axis_name = 'Column C'
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_3_name[i] === 'undefined' ? '' : col_3_name[i];
        }
        $(axisWrapperChilds[0]).text("Column C");
    }
    changeName();
    if (creationChart) {
        if (selected_data != []) {
            if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'x')
                selectedCart.options.scales.y.max = Math.max(...selected_data) + 1; //bar   
            else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'y')
                selectedCart.options.scales.x.max = Math.max(...selected_data) + 1; //hbar   
            else if (selectedCart.type == 'scatter' || selectedCart.type == 'line') {
                selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
                selectedCart.options.scales.x.max = Math.max(...selected_labels) + 1;
            } else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length > 1) {
                if (Math.max(...selected_data_multi) > Math.max(...selected_data)) {
                    selectedCart.options.scales.y.max = Math.max(...selected_data_multi) + 1;
                } else {
                    selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
                }
            }
        }
        myChart.update();
    }


    if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
        $(".ok_button").css("opacity", "0.6");
        $(".ok_button").attr("disabled", true);
    } else {
        $(".ok_button").css("opacity", "1");
        $(".ok_button").attr("disabled", false);
    }
}

function updateLabel() {
    selected_labels = [];
    myChart.data.labels = selected_labels;
    if (labeldChoice == 1) {
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_1_name[i] === 'undefined' ? '' : col_1_name[i];
        }
    } else if (labeldChoice == 2) {
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_2_name[i] === 'undefined' ? '' : col_2_name[i];
        }
    } else if (labeldChoice == 3) {
        for (let i = 0; i < selected_data.length; i++) {
            selected_labels[i] = typeof col_3_name[i] === 'undefined' ? '' : col_3_name[i];
        }
    }
    changeName();
    if (creationChart) {
        if (selected_data != []) {
            if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'x')
                selectedCart.options.scales.y.max = Math.max(...selected_data) + 1; //bar   
            else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length == 1 && selectedCart.options.indexAxis == 'y')
                selectedCart.options.scales.x.max = Math.max(...selected_data) + 1; //hbar   
            else if (selectedCart.type == 'scatter' || selectedCart.type == 'line') {
                selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
                selectedCart.options.scales.x.max = Math.max(...selected_labels) + 1;
            } else if (selectedCart.type == 'bar' && selectedCart.data.datasets.length > 1) {
                if (Math.max(...selected_data_multi) > Math.max(...selected_data)) {
                    selectedCart.options.scales.y.max = Math.max(...selected_data_multi) + 1;
                } else {
                    selectedCart.options.scales.y.max = Math.max(...selected_data) + 1;
                }
            }
        }
        myChart.update();
    }
}

function changeName() {
    $('.xAxisName').text(x_axis_name);
    $('.yAxisName').text(y_axis_name);

    if (selectedCart.type == 'bar' && selectedCart.options.indexAxis == 'y') {
        $('.xAxisName').text(y_axis_name);
        $('.yAxisName').text(x_axis_name);
    }
}

let OkVal = "";

function handelOk() {
    $("#cars").val(OkVal);
}
let okCounter = 0;
let okArray = [];
okArray.push("0");

function changeChart(val) {
    if ($(val).val() == '0') {
        // myChart.destroy();
        $('.showOption').addClass('my_disabled');
        selectedCart = undefined;
    } else if ($(val).val() == 'bar') {
        selectedCart = barGraph;
        $('.xAxisName').css('display', 'block');
        $('.yAxisName').css('display', 'block');
        $(".data_radio_multi").css("display", "none");
        $(".axisWrapper").css("display", "none");
        $('.name1').text('Data :');
        $('.name2').text('Labels :');
        $('.showOption').removeClass('my_disabled');

        $(".optionPopup .header_row span").text(("Bar Graph"));
        $("#cars").val("0");
        OkVal = 'bar';
        okCounter++;
        okArray[okCounter] = 'bar';
        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }

        showOption();
    } else if ($(val).val() == 'hBar') {
        selectedCart = HorizantalBarGraph;
        $('.xAxisName').css('display', 'block');
        $('.yAxisName').css('display', 'block');
        $(".data_radio_multi").css("display", "none");
        $(".axisWrapper").css("display", "none");
        $('.name1').text('Data :');
        $('.name2').text('Labels :');
        $('.showOption').removeClass('my_disabled');


        $(".optionPopup .header_row span").text(("Horizantal Bar Graph"));
        $("#cars").val("0");
        OkVal = "hBar";
        okCounter++;
        okArray[okCounter] = 'hBar';
        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }

        showOption();
    } else if ($(val).val() == 'scatter') {
        selectedCart = scatterPlot;
        $('.xAxisName').css('display', 'block');
        $('.yAxisName').css('display', 'block');
        $(".axisWrapper").css("display", "none");
        $(".data_radio_multi").css("display", "none");
        $('.name1').text('y-axis :');
        $('.name2').text('x-axis :');
        $('.showOption').removeClass('my_disabled');

        $(".optionPopup .header_row span").text(("Scatter Plot Graph"));
        $("#cars").val("0");
        OkVal = "scatter";

        okCounter++;
        okArray[okCounter] = 'scatter';
        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }
        showOption();
    } else if ($(val).val() == 'line') {
        selectedCart = lineGraph;
        $('.xAxisName').css('display', 'block');
        $('.yAxisName').css('display', 'block');
        $(".data_radio_multi").css("display", "none");
        $(".axisWrapper").css("display", "none");
        $('.name1').text('y-axis :');
        $('.name2').text('x-axis :');
        $('.showOption').removeClass('my_disabled');
        $(".optionPopup .header_row span").text(("Line Graph"));
        $("#cars").val("0");
        OkVal = "line";

        okCounter++;
        okArray[okCounter] = 'line';

        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }
        showOption();
    } else if ($(val).val() == 'pie') {
        selectedCart = pieGraph;
        $('.xAxisName').css('display', 'none');
        $('.yAxisName').css('display', 'none');
        $(".data_radio_multi").css("display", "none");
        $(".axisWrapper").css("display", "none");
        $('.name1').text('Data :');
        $('.name2').text('Labels :');
        $('.showOption').removeClass('my_disabled');
        $(".optionPopup .header_row span").text(("Circle Graph"));
        $("#cars").val("0");
        OkVal = "pie";
        okCounter++;
        okArray[okCounter] = 'pie';
        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }

        showOption();
    } else if ($(val).val() == 'multi') {
        selectedCart = doubleBarGraph;
        $('.xAxisName').css('display', 'none');
        $('.yAxisName').css('display', 'none');
        $(".data_radio_multi").css("display", "flex");
        $(".axisWrapper").css("display", "grid");
        $(".name1").text("Data-1 : ")
        $('.name2').text('Labels :');
        $('.showOption').removeClass('my_disabled');
        $(".optionPopup .header_row span").text(("Double Bar Graph"));
        $("#cars").val("0");
        OkVal = "multi";

        okCounter++;
        okArray[okCounter] = 'multi';

        if ($(".label_radio input:checked").length === 0 && $(".data_radio input:checked").length === 0) {
            $(".ok_button").css("opacity", "0.6");
            $(".ok_button").attr("disabled", true);
        } else {
            $(".ok_button").css("opacity", "1");
            $(".ok_button").attr("disabled", false);
        }
        showOption();
    }
}

function closeOption() {
    $('.optionPopup').hide()
}

function showOption() {
    $('.optionPopup').css('display', 'flex');
}

function showChart() {
    myChart.destroy();
    myChart = new Chart(ctx, selectedCart);
    creationChart = true;
    myChart.data.labels = selected_labels;
    myChart.data.datasets[0].data = selected_data;
    choiceData(dataChoice);
    selectedCart == doubleBarGraph ? choiceDataMulti(dataChoiceMulti) : '';
    $('.optionPopup').hide();
}


function handelReset() {
    $(".item.active input").val("");

    ctx = document.getElementById('myChart');
    ctx.width = 778;
    ctx.height = 388;
    graphVal1 = "";
    graphVal2 = "";
    graphVal3 = "";
    fristChoice = true;
    labeldChoice = "";
    dataChoice = "";
    col_1_data = [];
    col_1_name = [];
    col_2_data = [];
    col_2_name = [];
    col_3_data = [];
    col_3_name = [];
    selected_data = [];
    selected_labels = [];
    selected_points = [];
    x_axis_name = "";
    y_axis_name = "";
    creationChart = false;
    selectedCart = "";
    selected_data_multi = [];
    dataChoiceMulti,
    lastChart = 0;

    $('.xAxisName , .yAxisName, .axisWrapper').css("display", "none");
    myChart.destroy();

    $("#cars").val("0");
    $(".showOption").addClass("my_disabled");

}