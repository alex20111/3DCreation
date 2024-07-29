import { Routes } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { ManageProductComponent } from './views/manage-product/manage-product.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { categoriesListResolver } from './resolver/categories-resolver';
import { CartComponent } from './views/cart/cart.component';
import { QuoteComponent } from './views/quote/quote.component';
import { ServiceComponent } from './views/service/service.component';
import { LoginComponent } from './views/auth-view/login/login.component';
import { SingupComponent } from './views/auth-view/singup/singup.component';
import { ChangePasswordComponent } from './views/auth-view/change-password/change-password.component';
import { ForgotPasswordComponent } from './views/auth-view/forgot-password/forgot-password.component';
import { AuthGuard } from './_helpers/auth.guard';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'editProduct/:id', component: ManageProductComponent, resolve: {catgList: categoriesListResolver},canActivate : [AuthGuard] },
    { path: 'addProduct', component: ManageProductComponent, resolve: {catgList: categoriesListResolver} ,canActivate : [AuthGuard]},
    { path: 'viewProduct/:id', component: ProductViewComponent },
    { path: 'addToCart/:id', component: CartComponent },
    { path: 'viewCart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SingupComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'resetPassword', component: ForgotPasswordComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'changePassword', component: ChangePasswordComponent },
];
