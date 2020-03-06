
import { LoginComponent } from './login/login.component';
import {ListComponent} from './list/list.component';
import { MenuComponent } from './menu/menu.component';

export const routes = [
    { path: '', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'list', component: ListComponent }
];

export const navigatableComponents = [
    LoginComponent,
    MenuComponent,
    ListComponent
];