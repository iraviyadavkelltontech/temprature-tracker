
export default class TempTracker {
    tempArr: number[];
    maxOccurrences: number;
    mode: number | null;
    tempArrLength: number;
    totalSum: number;
    mean: number | null;
    minTemp: number | null;
    maxTemp: number | null;

    constructor() {
  
      this.tempArr = new Array(150).fill(0); 
      this.maxOccurrences = 0;
      this.mode = null;
  
      this.tempArrLength = 0;
      this.totalSum = 0;
      this.mean = null;
  
      this.minTemp = null;
      this.maxTemp = null;
    }
  
    insert(temperature: number) {
      this.tempArr[temperature]++;
      if (this.tempArr[temperature] > this.maxOccurrences) {
        this.mode = temperature;
        this.maxOccurrences = this.tempArr[temperature];
      }
  
      this.tempArrLength++;
      this.totalSum += temperature;
      this.mean = this.totalSum / this.tempArrLength;
  
      if (this.maxTemp === null || temperature > this.maxTemp) {
        this.maxTemp = temperature;
      }
      if (this.minTemp === null || temperature < this.minTemp) {
        this.minTemp = temperature;
      }
    }
  
    getMax() {
      return this.maxTemp;
    }
  
    getMin() {
      return this.minTemp;
    }
  
    getMean() {
      return this.mean;
    }
  
    getMode() {
      return this.mode;
    }
  }
  
  