import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { DialogResourceDialog } from './dialog-resource-dialog/dialog-resource-dialog.component';
import { DialogRoomDialog } from './dialog-room-dialog/dialog-room-dialog.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  locations = [
    { value: '', viewValue: 'All' },
    { value: 1, viewValue: 'Kalgoorlie' },
    { value: 2, viewValue: 'Busselton' },
    { value: 3, viewValue: 'Mandurah' },
  ];

  status = [
    'Occupied',
    'Available'
  ];
  copyData = [];
  resourcesList = [
    {
      title: 'Single Room',
      room: '15 rooms',
      locations: [
        {
          name: 'Kalgoorlie',
          id: 1,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Busselton',
          id: 2,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Mandurah',
          id: 3,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        }
      ]
    },
    {
      title: 'Equipments',
      room: '6 equipments',
      locations: [
        {
          name: 'Kalgoorlie',
          id: 1,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Busselton',
          id: 2,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Mandurah',
          id: 3,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        }
      ]
    },
    {
      title: 'Hot Stone',
      room: '3 stones',
      locations: [
        {
          name: 'Kalgoorlie',
          id: 1,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Busselton',
          id: 2,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        },
        {
          name: 'Mandurah',
          id: 3,
          values: [
            {
              id: 4,
              cost: 15,
              available: 2,
              status: 1,
            },
            {
              id: 5,
              cost: 12,
              available: 4,
              status: 1,
            },
            {
              id: 3,
              cost: 15,
              available: 5,
              status: 0,
            },
            {
              id: 3,
              cost: 12,
              available: 3,
              status: 0,
            },
            {
              id: 1,
              cost: 12,
              available: 3,
              status: 0,
            }
          ]
        }
      ]
    }
  ]
  location: any;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.copyData = JSON.parse(JSON.stringify(this.resourcesList));
  }

  onLocationChange() {
    if (this.location == 0) {
      this.resourcesList = JSON.parse(JSON.stringify(this.copyData));
      return;
    }
    this.resourcesList = JSON.parse(JSON.stringify(this.copyData));
    this.resourcesList.forEach(element => {
      const obj = element.locations.find(x => x.id === this.location);
      if (obj) {
        element.locations = [];
        element.locations.push(obj);
      }

    });

    setTimeout(() => {
      this.accordion.openAll();
    }, 100);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogResourceDialog, {
      width: '60%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result && result.cost && result.capacity) {
        const data = {
          title: 'Single Room',
          room: '15 rooms',
          locations: []

        }
        if (result.Kalgoorlie) {
          data.locations.push({
            name: 'Kalgoorlie',
            id: 1,
            values: [{
              id: 1,
              cost: result.cost,
              available: result.capacity,
              status: 1
            }]
          })
        }
        if (result.Mandurah) {
          data.locations.push({
            name: 'Mandurah',
            id: 3,
            values: [{
              id: 1,
              cost: result.cost,
              available: result.capacity,
              status: 1
            }]
          })
        }
        if (result.Busselton) {
          data.locations.push({
            name: 'Busselton',
            id: 2,
            values: [{
              id: 1,
              cost: result.cost,
              available: result.capacity,
              status: 1
            }]
          })
        }
        this.resourcesList.push(data);
      }
    });
  }
  openRoomDialog(item, location?, index?, isEdit?, dateIndex?): void {
    let data = {};
    if (isEdit) {
      data = {
        name: location.name,
        available: isEdit.available,
        cost: isEdit.cost,
        edit: true
      }
    } else {
      data = { edit: false }
    }
    const dialogRef = this.dialog.open(DialogRoomDialog, {
      width: '60%',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result.cost && result.available && result.name) {
        if (!isEdit) {
          item.locations[0].values.push({
            id: item.locations[0].values.length + 1,
            cost: result.cost,
            available: result.available,
            status: 1,
          });
          item.locations[1].values.push({
            id: item.locations[0].values.length + 1,
            cost: result.cost,
            available: result.available,
            status: 1,
          });
          item.locations[2].values.push({
            id: item.locations[0].values.length + 1,
            cost: result.cost,
            available: result.available,
            status: 1,
          });
        }

        if (isEdit) {
          item.locations[index].values[dateIndex] = {
            id: result.name,
            cost: result.cost,
            available: result.available,
            status: 1,
          }
        }
      }
    });
  }

}


