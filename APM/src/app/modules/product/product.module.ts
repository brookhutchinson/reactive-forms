// angular modules
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';

// feature routing module
import { ProductRoutingModule }   from './product-routing.module';

// shared modules
import { SharedModule }           from '../shared/shared.module';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent }   from './components/product-edit/product-edit.component';
import { ProductListComponent }   from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    RouterModule,
    // feature routing mdoule
    ProductRoutingModule,
    // shared modules
    SharedModule,
  ],
  // components
  declarations: [
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
