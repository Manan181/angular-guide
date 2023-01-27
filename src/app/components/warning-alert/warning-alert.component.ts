import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit{
  
  ngOnInit(): void {
    $('.warning-alert').css({'background-color': 'red', 'color': 'white', 'padding': '20px'});
  }
}
