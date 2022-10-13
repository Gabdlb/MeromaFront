import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';

export interface PeriodicElement {
  nom: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nom: 'Gabriel', weight: 2312, symbol: '17/01/2000' },
  { position: 2, nom: 'Théophile', weight: 2501, symbol: '31/10/2003' },
  { position: 3, nom: 'Jasmine', weight: 2679, symbol: '31/07/2007' },
  { position: 4, nom: 'Inès', weight: 2239, symbol: '20/02/2014' },
  { position: 5, nom: 'Julien', weight: 3386, symbol: '26/02/2016' },
  { position: 6, nom: 'Hugo', weight: 2707, symbol: '03/01/2018' },
  { position: 7, nom: 'Antoine', weight: 2702, symbol: '13/04/2018' },
  { position: 8, nom: 'Juliette', weight: 0, symbol: '05/09/2018' },
  { position: 9, nom: 'Antoine', weight: 2220, symbol: '02/09/2019' },
  { position: 10, nom: 'Erwan', weight: 2250, symbol: '28/04/2020' },
];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Customers');
    this.logger.log('Customers loaded');
    this.notificationService.openSnackBar('Employes loaded');
    this.dataSource.sort = this.sort;

  }
}
