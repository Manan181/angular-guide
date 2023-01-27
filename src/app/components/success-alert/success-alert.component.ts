import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit{

  ngOnInit(): void {
    $('.success-alert').css({'background-color': 'green', 'color': 'white', 'padding': '20px'});
  }
}
