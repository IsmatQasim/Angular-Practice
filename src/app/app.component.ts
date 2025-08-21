import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name:string = ""
  // age : number | null = null
  // description : string = ""

  // ---------------------------------------------

  // count:number=0
  // increment(){
  //   this.count++;
  // }
  // decrement(){
  //   this.count--;
  // }

    // ---------------------------------------------


//   list: string[] = [];

//   id: Number = 0;
// addTask(input: HTMLInputElement) {
//   if (input.value.trim() === '') {
//     alert('Empty Task! , Write Something');
//   } else {
//     this.list.push(input.value);
//     console.log(this.list);
//     input.value = '';
//   }
// }
//   deleteItem(index: number) {
//     this.list.splice(index, 1);
//     console.log(this.list);
//   }

// --------------------------------
users:any
constructor(private userData:UserDataService) {
}

ngOnInit() {
  this.userData.users().subscribe((data) => {
    console.log(this.users=data);
    console.log(this.users)
  })
}
}
