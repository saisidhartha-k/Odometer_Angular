import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odometer';

  private n: number = 123;

  reset(): number {
    return (this.n = 123);
  }

  getOdometer(): number {
    return this.n;
  }

  nextReading(): number {
    let i: number = 1;
    let count: number = this.largestNumber(123);
    while (this.n < count) {
      this.n = this.n + 1;
      if (this.isAscending(this.n)) {
        break;
      }
    }
    return this.n;
  }

  previousOdometer(): number {
    let small: number = this.smallestNumber(123);
    let large: number = this.largestNumber(123);
    while (this.n >= small) {
      if (this.n === small) {
        return (this.n = large);
      }
      this.n = this.n - 1;
      if (this.isAscending(this.n)) {
        break;
      }
    }
    return this.n;
  }

  largestNumber(n: number): number {
    let count: number = 0;
    let ans: number = 0;
    count = this.countOfDigit(n);
    for (let i = count; i > 0; i--) {
      ans = ans * 10 + (10 - i);
    }
    return ans;
  }

  smallestNumber(n: number): number {
    let ans: number = 0;
    let count: number = 0;
    count = this.countOfDigit(n);
    for (let i = 1; i <= count; i++) {
      ans = ans * 10 + i;
    }
    return ans;
  }

  countOfDigit(n: number): number {
    let ans: number = 0;
    let c: number = 0;
    const numberList: number[] = [];
    while (n !== 0) {
      ans = n % 10;
      numberList.push(ans);
      n = Math.floor(n / 10);
      c += 1;
    }
    return c;
  }

  isAscending(n: number): boolean {
    let ans: number = 0;
    let c: number = 0;
    const numberList: number[] = [];
    while (n !== 0) {
      ans = n % 10;
      numberList.push(ans);
      n = Math.floor(n / 10);
    }
    for (let i = 1; i < numberList.length; i++) {
      if (numberList[i - 1] > numberList[i]) {
        c += 1;
      }
    }
    return c + 1 === numberList.length;
  }
}
