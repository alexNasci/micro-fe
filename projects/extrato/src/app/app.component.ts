import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() data: string = "";

  constructor(private router: Router){
    this.router.initialNavigation();
  }

  ngOnInit(): void {
    console.log('Data: ', this.data);
  }
}
