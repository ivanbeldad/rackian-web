import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutSharedModule } from '../shared/layout-shared.module';
import { LoginService } from './login/login.service';
import { LogoutComponent } from './logout/logout.component';
import { LogoutService } from './logout/logout.service';


@NgModule({
  imports: [
    SharedModule,
    LayoutSharedModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  providers: [
    LoginService,
    LogoutService,
  ],
})
export class LoginModule { }
