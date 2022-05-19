import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html',
  // template: `
  // <h1>I am in switch comp</h1>

  // `,
  styleUrls: ['./lightswitch.component.css']
  // styles: ``
})
export class LightswitchComponent implements OnInit {
  isOn = false;

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
