import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  @Input() Pdata: string = '';
  @Input() Pdata2: number = 0;
  @Input() Pdata3!: {};

  @Output() msgToParent = new EventEmitter<string>();
  @Output() dataFromChild = new EventEmitter<number>();


  ngOnInit(): void {
    console.log(this.Pdata);
    console.log(this.Pdata2);
    console.log(this.Pdata3);
  }

  sendMsgToParent() {
    this.msgToParent.emit('This is a msg from the child');
    this.dataFromChild.emit(200);
  }
}
