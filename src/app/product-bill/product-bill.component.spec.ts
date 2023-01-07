import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBillComponent } from './product-bill.component';

describe('ProductBillComponent', () => {
  let component: ProductBillComponent;
  let fixture: ComponentFixture<ProductBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
