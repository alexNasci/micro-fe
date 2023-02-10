import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { ExtratoListComponent } from './extrato-list/extrato-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ExtratoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'extrato',
        component: ExtratoListComponent
      }
    ], {useHash: true})
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-extrato', elem);
  }
}
