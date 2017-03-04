import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapsComponent} from '../components/maps/maps';
import { TransactiePage } from '../pages/transactie/transactie';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsComponent,
    TransactiePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TransactiePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
