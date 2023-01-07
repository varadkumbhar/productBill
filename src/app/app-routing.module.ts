import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBillComponent } from './product-bill/product-bill.component';

const routes: Routes = [
{
  path:'',
  component:ProductBillComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
