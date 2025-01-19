import { Component } from '@angular/core';
import { UserService } from './dashboard/services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ANGULAR-DEMO-4200';
  users: any[] = [];
  userDemo: any;
  id: number = 1;
  deleteId: number = 53;

  userTest: any = {
    name: 'Gaurav',
    password: '123',
    email: 'gaurav@gmail.com',
    salary: 25000.0,
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //this.usersData();
    //this.userData(this.id);
    //this.saveData();
    //this.deleteData(this.deleteId);
  }

  usersData(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error)
    );
  }
  userData(id: number) {
    this.userService.getUser(this.id).subscribe(
      (data) => {
        this.userDemo = data;
      },
      (error) => console.log(error)
    );
  }

  saveData(): void {
    this.userService.saveUser(this.userTest).subscribe(
      (res: any) => {
        console.log('Success');
      },
      (error) => console.log(error)
    );
  }
  deleteData(deleteId: number): void {
    this.userService.deleteUser(this.deleteId).subscribe(
      (res: any) => {
        console.log('Deleted');
      },
      (error) => console.log(error)
    );
  }

  inputClick = (refdata: any) => {
    console.log(refdata.value);
  };
  checkValue: boolean = false;
  checkClick = (checkRef: any) => {
    this.checkValue = checkRef.checked;
    console.log(this.checkValue);
  };
  radioValue: boolean = false;

  radioClick = (radioRef: any) => {
    this.radioValue = radioRef.checked;
    console.log(this.radioValue);
  };

  selectedValue:string ='';

  selectClick = (selectRef:any) =>{
    this.selectedValue = selectRef.value;
    console.log(this.selectedValue);

  }
}
