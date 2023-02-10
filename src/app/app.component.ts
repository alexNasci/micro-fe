import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-fe';

  ngOnInit(){
    const script = document.createElement('script');
    script.src = 'http://localhost:8080/extrato/main.js';
    document.body.appendChild(script);
  } 
  
}
