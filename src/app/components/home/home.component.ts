import { Component, Inject, NgZone, PLATFORM_ID, OnInit } from '@angular/core';
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { isPlatformBrowser } from '@angular/common';
// Interface
const lineChartMulti = [
  {


    location: "Store1",
    date: "10/01/2020",
    name: "Sep 1st 2020",
    Mandurah: 198,
    Busselton: 98,
    Kalgoorlie: 298,
  },
  {
    location: "Store2",
    date: "10/02/2020",
    name: "Sep 2nd 2020",
    Mandurah: 300,
    Busselton: 600,
    Kalgoorlie: 200,
  },
  {
    location: "Other",
    date: "10/03/2020",
    name: "Sep 3rd 2020",
    Mandurah: 210,
    Busselton: 120,
    Kalgoorlie: 410,
  },
  {
    location: "Store1",
    date: "10/04/2020",
    name: "Sep 4th 2020",
    Mandurah: 600,
    Busselton: 558,
    Kalgoorlie: 500,
  },
  {
    location: "Store2",
    date: "10/05/2020",
    name: "Sep 5th 2020",
    Mandurah: 100,
    Busselton: 255,
    Kalgoorlie: 600,
  },
  {
    location: "other",
    date: "10/06/2020",
    name: "Sep 6th 2020",
    Mandurah: 337,
    Busselton: 373,
    Kalgoorlie: 137,
  },
  {
    location: "Store1",
    date: "10/07/2020",
    name: "Sep 7th 2020",
    Mandurah: 486,
    Busselton: 544,
    Kalgoorlie: 186,
  },
  {
    location: "Store2",
    date: "10/08/2020",
    name: "Sep 8th 2020",
    Mandurah: 390,
    Busselton: 190,
    Kalgoorlie: 290,
  },
  {
    location: "other",
    date: "10/09/2020",
    name: "Sep 9th 2020",
    Mandurah: 155,
    Busselton: 190,
    Kalgoorlie: 355,
  },
  {
    location: "Store1",
    date: "10/10/2020",
    name: "Sep 10th 2020",
    Mandurah: 220,
    Busselton: 110,
    Kalgoorlie: 420,
  },
  {
    location: "Store2",
    date: "10/11/2020",
    name: "Sep 11th 2020",
    Mandurah: 111,
    Busselton: 380,
    Kalgoorlie: 333,
  },
  {
    location: "other",
    date: "10/12/2020",
    name: "Sep 12th 2020",
    Mandurah: 459,
    Busselton: 459,
    Kalgoorlie: 559,
  },
  {
    location: "Store1",
    date: "10/13/2020",
    name: "Sep 13th 2020",
    Mandurah: 507,
    Busselton: 57,
    Kalgoorlie: 407
  },
  {
    location: "Store2",
    date: "10/14/2020",
    name: "Sep 14th 2020",
    Mandurah: 202,
    Busselton: 177,
    Kalgoorlie: 101,
  },
  {
    location: "other",
    date: "10/15/2020",
    name: "Sep 15th 2020",
    Mandurah: 523,
    Busselton: 243,
    Kalgoorlie: 299,
  },
  {
    location: "Store1",
    date: "10/16/2020",
    name: "Sep 16th 2020",
    Mandurah: 223,
    Busselton: 300,
    Kalgoorlie: 123,
  },
  {
    location: "Store2",
    date: "10/17/2020",
    name: "Sep 17th 2020",
    Mandurah: 123,
    Busselton: 231,
    Kalgoorlie: 321,
  },
  {
    location: "other",
    date: "10/18/2020",
    name: "Sep 18th 2020",
    Mandurah: 421,
    Busselton: 241,
    Kalgoorlie: 124,
  },
  {
    location: "Store1",
    date: "10/19/2020",
    name: "Sep 19th 2020",
    Mandurah: 124,
    Busselton: 257,
    Kalgoorlie: 421,
  },
  {
    location: "Store2",
    date: "10/20/2020",
    name: "Sep 20th 2020",
    Mandurah: 228,
    Busselton: 282,
    Kalgoorlie: 555,
  },
  {
    location: "other",
    date: "10/21/2020",
    name: "Sep 21th 2020",
    Mandurah: 335,
    Busselton: 533,
    Kalgoorlie: 533,
  },
  {
    location: "Store1",
    date: "10/22/2020",
    name: "Sep 22th 2020",
    Mandurahe: 98,
    Busselton: 599,
    Kalgoorlie: 89,
  },
  {
    location: "Store2",
    date: "10/23/2020",
    name: "Sep 23th 2020",
    Mandurah: 179,
    Busselton: 268,
    Kalgoorlie: 197,
  },
  {
    location: "other",
    date: "10/24/2020",
    name: "Sep 24th 2020",
    Mandurah: 503,
    Busselton: 305,
    Kalgoorlie: 305
  },
  {
    location: "Store1",
    date: "10/25/2020",
    name: "Sep 25th 2020",
    Mandurah: 389,
    Busselton: 122,
    Kalgoorlie: 289
  },
  {
    location: "Store2",
    date: "10/26/2020",
    name: "Sep 26th 2020",
    Mandurah: 390,
    Busselton: 210,
    Kalgoorlie: 490
  },
  {
    location: "other",
    date: "10/27/2020",
    name: "Sep 27th 2020",
    Mandurah: 125,
    Busselton: 251,
    Kalgoorlie: 444
  },
  {
    location: "Store1",
    date: "10/28/2020",
    name: "Sep 28th 2020",
    Mandurah: 444,
    Busselton: 111,
    Kalgoorlie: 555
  },
  {
    location: "Store2",
    date: "10/29/2020",
    name: "Sep 29th 2020",
    Mandurah: 571,
    Busselton: 489,
    Kalgoorlie: 157
  },
  {
    location: "other",
    date: "10/30/2020",
    name: "Sep 30th 2020",
    Mandurahe: 99,
    Busselton: 150,
    Kalgoorlie: 100
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linelegendData = ["Kalgoorlie", "Busselton", "Mandurah"];
  lineChartMulti = lineChartMulti;

  KargoorlieCahsDrower = 12345;
  BuseltonCahsDrower = 14345;
  MandurahCahsDrower = 9345;
  monthPicker = [
    { value: 1, viewValue: 'January' },
    { value: 2, viewValue: 'February' },
    { value: 3, viewValue: 'March' },
    { value: 4, viewValue: 'April' },
    { value: 5, viewValue: 'May' },
    { value: 6, viewValue: 'Jun' },
    { value: 7, viewValue: 'July' },
    { value: 8, viewValue: 'August' },
    { value: 9, viewValue: 'September' },
    { value: 10, viewValue: 'October' },
    { value: 11, viewValue: 'November' },
    { value: 12, viewValue: 'December' },
  ];
  yearPicker = [
    { value: 1, viewValue: '2020' },
    { value: 1, viewValue: '2019' },
    { value: 1, viewValue: '2018' },
    { value: 1, viewValue: '2017' },
  ];
  locations = [
    { value: '', viewValue: 'All' },
    { value: 1, viewValue: 'Kalgoorlie' },
    { value: 2, viewValue: 'Busselton' },
    { value: 3, viewValue: 'Mandurah' },
  ];
  views = [
    { value: 1, viewValue: 'Monthly' },
    { value: 2, viewValue: 'Weekly' },
    { value: 3, viewValue: 'Yearly' },
  ];
  location: any;
  view = 1;
  range: any;
  compair: any;
  topSpenderCustomer = [
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Inaaya Dunlop',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Dillon Butt',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Chanelle Cooley',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Ayda Foreman',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Dougie Miles',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Jordanna Cuevas',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Shayna Harper',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Katelyn Arnold',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Tim Oconnell',
      spent: '6000',
      lastSession: '3 days ago'
    },
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Maheen Haley',
      spent: '6000',
      lastSession: '3 days ago'
    }
  ]
  averageWaitedTime = [
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'ketlyn Arnold',
      time: 30,
      refNumber: 1011542650
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'ketlyn Arnold',
      time: 27,
      refNumber: 7485630495
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'ketlyn Arnold',
      time: 18,
      refNumber: 4660987749
    },
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'ketlyn Arnold',
      time: 15,
      refNumber: 8700698182
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'ketlyn Arnold',
      time: 9,
      refNumber: 8057821660
    },
  ]
  appointmentCancelledLogs = [
    {
      location: 'Kalgoorlie',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Busselton',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Mandurah',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Kalgoorlie',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Busselton',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    }
  ]
  appointmentNoShowLogs = [
    {
      location: 'Kalgoorlie',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Busselton',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Mandurah',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Kalgoorlie',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    },
    {
      location: 'Busselton',
      name: 'ketlyn Arnold',
      date: '10/23/20',
      time: '17:54'
    }
  ]
  overallBusinessRating = [
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Joshua Ramirez',
      count: 4,
      review: "Best massage I've had, second visit and plan on coming back for more",
      backgrountColor: "green"
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Hanna Aquio',
      count: 5,
      review: "Best massage I've had, second visit and plan on coming back for more",
      backgrountColor: "#811063"
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Angelica Sanchez',
      count: 5,
      review: " Eilynn is the only person I know who can get rid of my tension headaches...",
      backgrountColor: "#32147a"
    }
  ]
  topTherapists = [
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Eilynn',
      count: 5,
      totalReview: 278,
      modelImg: "./assets/images/gold.png"
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'James',
      count: 5,
      totalReview: 246,
      modelImg: "./assets/images/silver.png"
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Erina',
      count: 5,
      totalReview: 237,
      modelImg: "./assets/images/medal.png"
    },
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'John',
      count: 5,
      totalReview: 237,
      modelImg: ""
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Kaila',
      count: 5,
      totalReview: 237,
      modelImg: ""
    }
  ];
  therapistsRating = [
    {
      location: 'Kalgoorlie',
      views: '10/23/20',
      name: 'Joshua Ramirez',
      count: 4,
      review: "Best massage I've had, second visit and plan on coming back for more",
      backgrountColor: "green"
    },
    {
      location: 'Busselton',
      views: '10/23/20',
      name: 'Hanna Aquio',
      count: 5,
      review: "Best massage I've had, second visit and plan on coming back for more",
      backgrountColor: "#811063"
    },
    {
      location: 'Mandurah',
      views: '10/23/20',
      name: 'Angelica Sanchez',
      count: 5,
      review: " Eilynn is the only person I know who can get rid of my tension headaches...",
      backgrountColor: "#32147a"
    }
  ];
  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      this.salesChart();
      this.marketingChart();
      this.revenueChart();
      this.serviceChart();
      this.productsChart();
      this.paymentMethodChart();
      this.profiltChart();
    });
  }

  salesChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.list = [
      am4core.color("#67b7dc"),
      am4core.color("#c294ef"),
      am4core.color("#6794dc")

    ];
    chart.paddingRight = 20;

    // let data = [];
    // let visits = 10;
    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    // }

    chart.data = lineChartMulti;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 120;
    dateAxis.dateFormats.setKey("day", "MMM ddt yyyy");
    // dateAxis.dateFormatter.dateFormat = "MMM d, yyyy";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "Busselton";
    series.dataFields.customValue = "Kalgoorlie";
    series.dataFields.valueY = "Mandurah";
    series.tooltipText = "Mandurah: {openValueY.value} Busselton: {valueY.value} Kalgoorlie: {customValue.value}";
    series.sequencedInterpolation = true;
    series.strokeWidth = 2;
    series.tooltip.getFillFromObject = false;
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.label.fill = am4core.color("#000");
    series.name = "Mandurah";
    series.stroke = chart.colors.getIndex(9);
    series.fill = series.stroke;

    let bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = bullet.fill;
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "Busselton";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "Busselton";
    series2.stroke = chart.colors.getIndex(1);
    series2.fill = series2.stroke;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet())
    bullet2.fill = bullet2.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;


    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "Kalgoorlie";
    series3.sequencedInterpolation = true;
    series3.strokeWidth = 2;
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.label.fill = am4core.color("#000");
    series3.name = "Kalgoorlie";
    series3.stroke = chart.colors.getIndex(11);
    series3.fill = series3.stroke;

    let bullet3 = series3.bullets.push(new am4charts.CircleBullet())
    bullet3.fill = bullet3.fill;
    bullet3.fillOpacity = 1;
    bullet3.strokeWidth = 2;
    bullet3.circle.radius = 4;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add legend
    chart.legend = new am4charts.Legend();
    this.chart = chart;

    // create ranges
    let negativeRange = undefined;

    // create ranges
    this.chart.events.on("datavalidated", () => {
      series.dataItems.each(function (s1DataItem) {
        let s1PreviousDataItem;
        let s2PreviousDataItem;

        let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);

        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }

        let startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();

        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          let x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
          let y01 = s1PreviousDataItem.valueY;
          let y02 = s2PreviousDataItem.valueY;

          let x1 = startTime + dateAxis.baseDuration / 2;
          let y11 = s1DataItem.valueY;
          let y12 = s2DataItem.valueY;

          let intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });

          startTime = Math.round(intersection.x);
        }

        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
          }
        }
        else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
            negativeRange = undefined;
          }
        }
      })
    })
  }

  marketingChart() {
    let chart = am4core.create("marketingchart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Book IT App",
      "litres": 501.9
    }, {
      "name": "Walk In",
      "litres": 301.9
    }, {
      "name": "Drive In",
      "litres": 201.1
    }, {
      "name": "Facebook",
      "litres": 165.8
    }, {
      "name": "Instagram",
      "litres": 139.9
    }, {
      "name": "Google Maps",
      "litres": 128.3
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.valueLabels.template.disabled = true;
  }

  revenueChart() {
    let chart = am4core.create("revenuechart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Service",
      "litres": 501.9
    }, {
      "name": "Product",
      "litres": 301.9
    }, {
      "name": "Voucher",
      "litres": 201.1
    }, {
      "name": "Other",
      "litres": 165.8
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.valueLabels.template.disabled = true;
  }
  serviceChart() {
    let chart = am4core.create("servicechart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Relaxation Message",
      "litres": 501.9
    }, {
      "name": "Deep Tissue Message",
      "litres": 301.9
    }, {
      "name": "Remedial Message",
      "litres": 201.1
    }, {
      "name": "Remedial2 Message",
      "litres": 165.8
    }, {
      "name": "Remedial3 Message",
      "litres": 165.8
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.valueLabels.template.disabled = true;
  }
  productsChart() {
    let chart = am4core.create("productchart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Relaxation Message",
      "litres": 501.9
    }, {
      "name": "Deep Tissue Message",
      "litres": 301.9
    }, {
      "name": "Remedial Message",
      "litres": 201.1
    }, {
      "name": "Remedial2 Message",
      "litres": 165.8
    }, {
      "name": "Remedial3 Message",
      "litres": 165.8
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.valueLabels.template.disabled = true;
  }
  paymentMethodChart() {
    let chart = am4core.create("paymentchart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Online banking",
      "litres": 501
    }, {
      "name": "Cash",
      "litres": 301
    }, {
      "name": "Net Bancking",
      "litres": 201
    }, {
      "name": "Mobile Banking",
      "litres": 165
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);


  }
  profiltChart() {
    let chart = am4core.create("profiltchart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "name": "Salaries",
      "litres": 101
    }, {
      "name": "Discounts",
      "litres": 301
    }, {
      "name": "therepists",
      "litres": 601
    }, {
      "name": "Sales ",
      "litres": 201
    }, {
      "name": "Return",
      "litres": 165
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.legendSettings.labelText = "{category}";
    chart.hiddenState.properties.radius = am4core.percent(0);


  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
