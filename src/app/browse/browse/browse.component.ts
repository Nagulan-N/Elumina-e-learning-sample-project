import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  @Output() fileLoaded = new EventEmitter<any[]>();
  fileName:any = '';
  constructor() { }

  ngOnInit(): void {
  }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.fileName = file.name||'';
    if (file) {
      if (file.type !== 'application/json') {
        alert('Only JSON files are allowed');
        return;
    }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const jsonData = JSON.parse(e.target.result);
        this.fileLoaded.emit(jsonData);
      };
      reader.readAsText(file);
    }
  }

}
