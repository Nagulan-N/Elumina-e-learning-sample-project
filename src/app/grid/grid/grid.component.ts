import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    @Input() jsonData: any= [];
    headers: any = [];
    headerMap:any = new Map();
    header2Map:any = new Map();

  constructor() { }

  ngOnInit(): void {
    this.headerMap.set('name','Name');
    this.headerMap.set('age','Age');
    this.headerMap.set('gender','Gender');
    this.headerMap.set('phoneNumber','Phone Number');
    this.header2Map.set('country','Country');
    this.header2Map.set('papulation','Population ( Area ) ');
    this.header2Map.set('area','Area (sqkm)');
    this.header2Map.set('nationLanguage','National Language');
    this.header2Map.set('capital','Capital');
    this.header2Map.set('currency','Currency');
    this.headerMap.set('AHeader',['name','age','gender','phoneNumber']);
    this.header2Map.set('BHeader',['country','papulation','area','nationLanguage','capital','currency']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.jsonData && this.jsonData) {
      this.headers = Object.keys(this.jsonData[0] || {});
      let aheader = 0;
      let bHeader = 0;
      let extraArray:any = [];
      this.headers.forEach((ele: any) => {
        if(this.headerMap.get(ele)!= undefined || this.header2Map.get(ele)!= undefined){
          (this.headerMap.get(ele))?aheader+=1:bHeader+=1;
        }else{
          this.headerMap.set(ele,ele);
          extraArray.push(ele);
        }
      });
      // for Determine the correct header to diaplay illustration order wise
      aheader == 4 ? this.headers=this.headerMap.get('AHeader'):'';
      bHeader == 6 ? this.headers=this.header2Map.get('BHeader'):'';
      extraArray.forEach((ele:any)=>{
        this.headers.push(ele);
      });
    }
  }
}
