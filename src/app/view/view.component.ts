import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  jsonData: any[] = [];

  constructor() { }


  ngOnInit(): void {
  }

  onFileLoaded(data: any[]): void {
    this.jsonData = data;
  }
}
