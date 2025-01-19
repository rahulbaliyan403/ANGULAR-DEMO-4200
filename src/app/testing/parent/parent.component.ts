import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.dataFromChild);
  }

  testingData:string ="This is parent testing data";
  testingData2:number = 100;

  product:any ={"id":1,"name":"Rahul"};

  messageFromChild = '';

  @Input() dataFromChild:number =0;

  handleMessageFromChild(message: string) {
    this.messageFromChild = message;
    
  }

}
