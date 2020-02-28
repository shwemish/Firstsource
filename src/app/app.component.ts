import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname:string="First Angular APP"
  programmer:string="shweta";
  technologies:string[]=["Java","html","css",
  "javascript","angular","React"];

titles:string[]=["software","system needs","Vendors"];
information:string[][]=[
  ["oracle","Inteliij","mysql","chrome"],["15 gb ram","harddisk space"],["Oracle","Google"]
];
item:string="Nothing";

process(data){
  this.item=data;
}

}
