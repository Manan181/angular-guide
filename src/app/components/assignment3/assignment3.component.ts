import { Component } from '@angular/core';
type Logs = {
  timestamp: object;
  toggleState: string;
}
@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})

export class Assignment3Component {
  
  toggle = true;
  toggleLogs: Logs[] = [];
  logIndex: number;

  constructor() {
    this.logIndex = 0;
  }
  
  toggleClick() {
    this.toggle = !this.toggle;
    const timestamp = new Date();
    const toggleState = this.toggle ? 'Show Paragraph' : 'Hide Paragraph';
    this.logIndex++;
    this.toggleLogs.push({timestamp, toggleState});
  }
}
