// Bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

// Navbar background

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 5) {
//             $("header").css({
//                 "background": "#3e37cc",
//                 "box-shadow": "4px 4px 8px rgba(0,0,0,.2)",
//                 "color": "#fff"
//             });
//             $(".navbar-brand .only-desktop").attr("src", "assets/images/logo-white.png");
//             $("header a.bg-primary-color").css("background", "#1d179a");
//         } else {
//             $("header").css({
//                 "background": "transparent",
//                 "box-shadow": "none",
//                 "color": "#000"
//             });
//             $(".navbar-brand .only-desktop").attr("src", "assets/images/pinksurfing.png");
//             $("header a.bg-primary-color").css("background", "#3e37cc");
//         }

//         if ($(window).scrollTop() > 768) {
//             $(".move-top-top").css("display", "block");
//         } else {
//             $(".move-top-top").css("display", "none");
//         }

//         $('.move-top-top').click(function () {
//             $(window).scrollTop(0);
//         });
//     });
// });

// Password visibility
$(".fa-eye").click(function () {
    if ($(this).parents(".form-group").find(".show_password").attr("type") === "password") {
        $(this).parents(".form-group").find(".show_password").attr("type", "text")
    } else {
        $(this).parents(".form-group").find(".show_password").attr("type", "password")
    }
});

// Buysell Page Persentage select

$(".amount-percentage").click(function () {
    $(".amount-percentage").css({
        "background": "transparent",
        "color": "#3e37cc",
        "border": "1px solid #3e37cc"
    });
    $(this).css({
        "background": "#3e37cc",
        "color": "#fff",
        "border": "1px solid #3e37cc"
    });
});

// Dashboard Charts
function chartone() {
    var ctx = document.getElementById("chart_one");

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = '#3e37cc';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    var chart_one = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["10.00", "10.10", "10.20", "10.30", "10.40", "10.50", "11.00", "11.00", "11.10", "11.20"],
            datasets: [{
                data: [50, 46, 52, 55, 45, 50, 48, 50, 42, 48],
                fill: false,
                borderColor: '#3e37cc',
                backgroundColor: '#3e37cc',
                borderWidth: 2,
                pointStrokeColor: "#202b33",
                pointHighlightStroke: "rgba(225,225,225,0.9)",
            }]
        },
        options: {
            legend: {
                display: false
            },
            elements: {
                line: {
                    tension: 0
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

// --------------------------------------------------------------------------------------- //

function dashboardpiechart() {
    var piecoins = document.getElementById("piechart_coins");

    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 14;

    var coinsData = {
        labels: [
            "BTC",
            "ETH",
            "BNB",
            "LTC",
            "BCH",
            "XRP",
            "NEO",
            "LINK"
        ],
        datasets: [
            {
                data: [110, 86.2, 27.2, 15.2, 51.2, 40, 23.3, 20],
                backgroundColor: [
                    "#05d8d8",
                    "#3e37cc",
                    "#4646d1",
                    "#6f6ae5",
                    "#9898ed",
                    "#bbbbea",
                    "#e4e9f7",
                    "#e5ebfb"
                ]
            }]
    };

    var pieChart = new Chart(piecoins, {
        type: 'doughnut',
        data: coinsData,
        options: {
            legend: {
                display: true,
                position: 'left',
            }
        }
    });
}


// Table List and Grid view

// List View
function listView() {
    $(".table-bg").addClass("card bg-white rounded p-5");
    $(".row-view").removeClass(" grid-view card bg-white rounded p-5").addClass(" list-view");
    $(".table-row").css({
        "width": "100%"
    });
    $(".table-header").css("display", "block");
}

// Grid View
function gridView() {
    $(".table-bg").removeClass("card bg-white rounded p-5");
    $(".row-view").removeClass(" list-view").addClass(" grid-view card bg-white rounded p-5");
    $(".table-row").css({
        "width": "calc(25% - 30px)",
        "margin": "0 auto 2rem"
    });
    $(".table-header").css("display", "none");
}

$("#listgrid button i").click(function () {
    $("#listgrid button i").removeClass("table-active-view").addClass("text-gray-2");
    $(this).addClass("table-active-view");
});

// Portfolio Page Chart

function portchart() {

    var portfoliochart = document.getElementById("portfolio_piechart");

    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 14;

    var coinsData = {
        labels: [
            "BTC",
            "ETH",
            "BNB",
            "LTC",
            "BCH",
            "XRP",
            "NEO",
            "LINK"
        ],
        datasets: [
            {
                data: [110, 86.2, 27.2, 15.2, 51.2, 40, 23.3, 20],
                backgroundColor: [
                    "#05d8d8",
                    "#3e37cc",
                    "#4646d1",
                    "#6f6ae5",
                    "#9898ed",
                    "#bbbbea",
                    "#e4e9f7",
                    "#e5ebfb"
                ]
            }]
    };

    var pieChart = new Chart(portfoliochart, {
        type: 'doughnut',
        data: coinsData,
        options: {
            legend: {
                display: false,
            }
        }
    });

}

// Document Verification Steps

$('.next-step').on('click', function () {
    if ($('#step1').css('display') != 'none') {
        $('#step2').show().siblings('div').hide();
    } else if ($('#step2').css('display') != 'none') {
        $('#step3').show().siblings('div').hide();
    } else if ($('#step3').css('display') != 'none') {
        $('#step4').show().siblings('div').hide();
    } else if ($('#step4').css('display') != 'none') {
        $('#step5').show().siblings('div').hide();
    }
});

$('.prev-step').on('click', function () {
    if ($('#step4').css('display') != 'none') {
        $('#step3').show().siblings('div').hide();
    } else if ($('#step3').css('display') != 'none') {
        $('#step2').show().siblings('div').hide();
    } else if ($('#step2').css('display') != 'none') {
        $('#step1').show().siblings('div').hide();
    }
});

$("#step2_1").click(function () {
    $('#step3_1').show().siblings('div').hide()
});

$("#step3_1 .next-step").click(function () {
    $('#step5').show().siblings('div').hide()
});

$("#step3_1 .previous-step-3_1").click(function () {
    $('#step2').show().siblings('div').hide()
});

$(".previous-step").click(function () {
    $(".document-verification").children().hide();
    $(this).closest(".steps").prev(".steps").show();
});