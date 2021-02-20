import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit, OnChanges {
  selectedColor1;
  selectedColor2;
  mixedColor;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.update();
    
  }

  update(){
    console.log('updating color');
    if(this.selectedColor1 && this.selectedColor2){
      const mixedRed = this.mixSegments(this.selectedColor1, this.selectedColor2, 1, 3);
      const mixedGreen= this.mixSegments(this.selectedColor1, this.selectedColor2, 3, 5);
      const mixedBlue = this.mixSegments(this.selectedColor1, this.selectedColor2, 5, 7);
      
      this.mixedColor = `#${this.toColorStr(mixedRed)}${this.toColorStr(mixedGreen)}${this.toColorStr(mixedBlue)}`
    }
    return this.mixedColor;
  }

  private mixSegments(color1, color2, start, end){
      const seg1 = color1.substring(start, end);
      const seg2 = color2.substring(start, end);
      return Math.ceil((parseInt(seg1, 16) + parseInt(seg2, 16)) / 2);
  }

  private toColorStr(num){
    return num.toString(16).padStart(2, '0')
  }

}
