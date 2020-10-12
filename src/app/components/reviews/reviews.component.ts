import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as Moment from 'moment';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
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
      date: '10/10/2020',
      serviceName: 'Deep Tissue',
      duration: 60,
      cost: 100,
      tips: 5
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
      date: '10/10/2020',
      serviceName: 'Deep Tissue',
      duration: 60,
      cost: 100,
      tips: 5
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
      serviceName: 'Deep Tissue',
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
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
    {
      therapistName: 'Jay',
      therapistRate: 2.5,
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
    {
      therapistName: 'Jay',
      therapistRate: 4.5,
      therapistDetail: 'This shop is best',
      therapistLike: 3,
      therapistDislike: 5,
      therapistMessage: 34,
      therapistShare: 53,
      submitDate: '10/02/2020'
    },
  ]
  constructor() { }

  ngOnInit() {
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
