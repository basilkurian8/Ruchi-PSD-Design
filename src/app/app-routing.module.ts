import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {
      path:"orderpage",
      component:OrderpageComponent
    },
    {
      path:"orderstatus",
      component:OrderStatusComponent
    },
    {
      path:"cart",
      component:CartComponent
    },
    {
      path:"productdetails",
      component:ProductDetailsComponent
    },
    {
      path:"product",
      component:ProductComponent
    },
    {
      path:"home",
      component:HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
