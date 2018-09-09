import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedule';
import SchedulePerformers from './schedule.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule: SchedulePerformers[];

  constructor() {
    this.schedule = Schedule;
  }

  ngOnInit() {}
}
