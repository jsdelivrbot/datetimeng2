import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import * as moment from 'moment/moment';
import {A2Edatetimepicker} from './datetime/datetimepicker.module';

@Component({
  selector: 'app-datetime',
  template: `
    <div>
      <div class="row">
        <div class="col-md-3">
          <label>Input element:</label>
          <div class="form-group">
            <div class="input-group">
              <input class="form-control"
                     appA2eDatetimepicker
                     [date]="date"
                     [options]="a2eOptions"
                     (onChange)="dateChange($event)"
                     (onClick)="dateClick()" />
              <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <label>Input-group div element:</label>
          <div class="form-group">
            <div class="input-group"
                 appA2eDatetimepicker
                 [date]="date"
                 [options]="a2eOptions"
                 (onChange)="dateChange($event)"
                 (onClick)="dateClick()">
              <input class="form-control" />
              <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
            </div>
          </div>
        </div>
      </div>
      <br>
      <p><b>Input date:</b> {{date}}</p>
      <button class="btn btn-default" (click)="getTime()">What's the time?</button>
      <button class="btn btn-default" (click)="addTime(1, 'h')">Add +1h</button>
      <button class="btn btn-default" (click)="addTime(1, 'd')">Add +1d</button>
      <button class="btn btn-default" (click)="addTime(1, 'w')">Add +1w</button>
      <button class="btn btn-default" disabled (click)="clearTime()">Clear the time</button>
    </div>
  `,
})
export class AppComponent {
  name: string;
  date: moment.Moment;
  a2eOptions: any;

  dateChange(date) {
    this.date = date;
  }

  dateClick() {
    console.log('click click!')
  }

  getTime() {
    alert('Selected time is:' + this.date);
  };

  addTime(val, selector) {
    this.date = moment(this.date.add(val, selector));
  };

  clearTime() {
    this.date = null;
  };

  constructor() {
    this.date = moment();
    this.a2eOptions = { format: 'DD.MM.YYYY' };
  }
}

@NgModule({
  imports: [ BrowserModule, A2Edatetimepicker ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
