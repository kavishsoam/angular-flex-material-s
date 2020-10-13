import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import * as Moment from 'moment';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  moment: any = Moment;
  location: any;
  locationInTherapist: any;
  staff: any;
  timeRange: any;
  sort: any;
  startDate: any;
  endDate: any;
  allLocationSelected = false;
  allSatffSelected = false;
  locations = [
    { value: 1, viewValue: 'Kalgoorlie' },
    { value: 2, viewValue: 'Busselton' },
    { value: 3, viewValue: 'Mandurah' },
  ];
  staffs = [
    { value: 1, viewValue: 'Tom' },
    { value: 2, viewValue: 'Pitter' },
    { value: 3, viewValue: 'Tim' },
  ]
  sorts = [
    { value: 1, viewValue: 'Latest' },
    { value: 2, viewValue: 'Oldest' },
    { value: 3, viewValue: 'Highest' },
  ]
  customers = [
    {
      name: 'Tom Z',
      bgColor: 'green',
      bussinessRate: 4.5,
      businessDetail: 'This shop is best',
      businessLike: 3,
      businessDislike: 5,
      businessMessage: 34,
      businessShare: 53,
      therapistName: 'Jay',
      therapistRate: 4,
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      skill: 4,
      communication: 3,
      attitude: 4.5,
      date: '10/3/2020',
      serviceName: 'Deep Tissue 1',
      duration: 30,
      cost: 100,
      tips: 8
    },
    {
      name: 'Mom Z',
      bgColor: 'grey',
      bussinessRate: 4,
      businessDetail: 'This shop is best',
      businessLike: 3,
      businessDislike: 5,
      businessMessage: 34,
      businessShare: 53,
      therapistName: 'Jay',
      therapistRate: 4,
      therapistDetail: 'This shop is best',
      therapistLike: 3.5,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      skill: 4,
      communication: 3,
      attitude: 2.5,
      date: '10/9/2020',
      serviceName: 'Deep Tissue 3',
      duration: 50,
      cost: 100,
      tips: 14
    },
    {
      name: 'Bom Z',
      bgColor: 'blue',
      bussinessRate: 3.5,
      businessDetail: 'This shop is best',
      businessLike: 3,
      businessDislike: 5,
      businessMessage: 34,
      businessShare: 53,
      therapistName: 'Jay',
      therapistRate: 4,
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      skill: 4,
      communication: 2.5,
      attitude: 3.5,
      date: '10/10/2020',
      serviceName: 'Deep Tissue 2',
      duration: 60,
      cost: 100,
      tips: 5
    }
  ]
  therapist = [
    {
      therapistName: 'Jay',
      therapistRate: 4,
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
    {
      therapistName: 'Jay',
      therapistRate: 3.5,
      therapistDetail: 'This shop is best 2',
      therapistLike: 3,
      therapistDislike: 3,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
    {
      therapistName: 'Jay',
      therapistRate: 2.5,
      therapistDetail: 'This shop is best 5',
      therapistLike: 3,
      therapistDislike: 4,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
    {
      therapistName: 'Sona',
      therapistRate: 4.5,
      therapistDetail: 'This shop is best 4',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
  ]
  tabIndex = 0;

  displayedColumns: string[] = ['name', 'bussinessRate', 'therapistName', 'therapistRate', 'skill', 'communication', 'attitude', 'date', 'serviceName', 'duration', 'cost', 'tips'];
  displayedColumns2: string[] = ['therapistName', 'therapistRate', 'therapistDetail', 'submitDate'];
  dataSource = new MatTableDataSource(this.customers);
  dataSource2 = new MatTableDataSource(this.therapist);

  @ViewChild(MatSort) sortTable: MatSort;
  @ViewChild(MatSort) sortTable2: MatSort;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sortTable;
    this.dataSource2.sort = this.sortTable2;
  }

  onTabSelect(e) {
    this.tabIndex = e;
    setTimeout(() => {
      if (e === 1) {
        this.dataSource2.sort = this.sortTable2;

      } else {
        this.dataSource.sort = this.sortTable;
      }
    }, 1000);
  }

  onLocationChange() {
    console.log(this.location)
  }
  onSatffChange() {
    console.log(this.location)
  }
  toggleAllSelection(type) {
    switch (type) {
      case 'location':
        this.allLocationSelected = !this.allLocationSelected;
        this.location = this.allLocationSelected ? _.map(this.locations, 'value') : [];
        break;
      case 'staff':
        this.allSatffSelected = !this.allSatffSelected;
        this.staff = this.allSatffSelected ? _.map(this.staffs, 'value') : [];
        break;
    }
  }

}
