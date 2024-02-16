import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
propertyList:[{name:string,location:string,price:string}]=[
  {name:"House",location:"Juinagar",price:"30-40 Lacks"}
]
}
