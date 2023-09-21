import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odometer';
  currentReading: string = '12345';
  constructor() { }


  ngOnInit(): void {

  }

  nextReading() {

    let nextReading = parseInt(this.currentReading);

    nextReading++;

    while (!this.isStrictlyIncreasing(nextReading)) {

      nextReading++;

    }

    this.currentReading = nextReading.toString();

    // if (this.isStrictlyIncreasing(nextReading)) {

    //   this.currentReading = nextReading.toString();

    // } else {
    // }

  }

  prevReading() {

    let prevReading = parseInt(this.currentReading);

    prevReading--;

    while (!this.isStrictlyIncreasing(prevReading)) {

      prevReading--;

    }

 

    this.currentReading = prevReading.toString();

    // if (this.isStrictlyIncreasing(prevReading)) {

    //   this.currentReading = prevReading.toString();

    // } else {

    //   console.log('Invalid reading, cannot decrement.');

    // }

  }

    isStrictlyIncreasing(num: number): boolean {

    const digits = num.toString().split('').map(Number);

    for (let i = 1; i < digits.length; i++) {

      if (digits[i] <= digits[i - 1]) {

        return false;

      }

    }
    return true;

  }

}
