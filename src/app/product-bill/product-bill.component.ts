import { Component } from '@angular/core';

@Component({
  selector: 'app-product-bill',
  templateUrl: './product-bill.component.html',
  styleUrls: ['./product-bill.component.css']
})
export class ProductBillComponent {
  productObj: product;
  productArray: any[] = [];

  isOther: boolean = false;
  sortBy: string;
  searchText: string;

  constructor() {
    this.productObj = new product();
    this.sortBy = '';
    this.searchText = '';
  }

  ngOnInit(): void {
    this.readLocalData();                                                        // 2] read data
  }
  readLocalData() {
    const localData = localStorage.getItem('ProductData');                      // 2] 2nd To read data in Localstorage.
    if (localData != null) {
      this.productArray = JSON.parse(localData);
    }
  }
  add() {
    if (this.productObj.productSku != '' && this.productObj.productName != '') {
      this.productObj.productFullName = this.productObj.productSku.concat('-', this.productObj.productName);
    }
  }

  cal() {
    if (this.productObj.enterPrice != 0 && this.productObj.discountPrice != 0) {
      this.productObj.totalPrice = this.productObj.enterPrice - this.productObj.discountPrice;
    }
  }

  addOther() {
    if (this.productObj.selectProduct == 'Other') {
      this.isOther = true;
    } else {
      this.isOther = false;
    }
  }
  onsave() {
    debugger
    if (this.productObj.productId == 0) {
      this.productObj.productId = this.productArray.length + 1;                                             // 1] first To save data in Localstorage
      this.productArray.push(this.productObj);
      localStorage.setItem('ProductData', JSON.stringify(this.productArray));
    }

  }

  onEdit(id: number) {
    const currentRecord = this.productArray.find(m => m.productId == id);
    if (currentRecord !== undefined) {
      this.productObj.productId = currentRecord.productId;
      this.productObj.productSku = currentRecord.productSku;
      this.productObj.productName = currentRecord.productName;
      this.productObj.productFullName = currentRecord.productFullName;
      this.productObj.selectProduct = currentRecord.selectProduct;
      this.productObj.enterPrice = currentRecord.enterPrice;
      this.productObj.discountPrice = currentRecord.discountPrice;
      this.productObj.totalPrice = currentRecord.totalPrice;
      this.productObj.otherProduct = currentRecord.otherProduct;

    }
  }

  onUpdate() {
    if (this.productObj.productId !== 0) {
      const currentRecord = this.productArray.find(m => m.productId == this.productObj.productId);
      if (currentRecord !== undefined) {
        currentRecord.productSku = this.productObj.productSku;
        currentRecord.productName = this.productObj.productName;
        currentRecord.productFullName = this.productObj.productSku;
        currentRecord.selectProduct = this.productObj.selectProduct;
        currentRecord.enterPrice = this.productObj.enterPrice;
        currentRecord.discountPrice = this.productObj.discountPrice;
        currentRecord.totalPrice = this.productObj.totalPrice;
        currentRecord.otherProduct = this.productObj.otherProduct;
        localStorage.setItem('ProductData', JSON.stringify(this.productArray));
      }
    }
  }

  onDelete(id:number){
    const productDelete=this.productArray.findIndex(m=>m.productId = id);
    this.productArray.splice(productDelete,1);
     localStorage.setItem('ProductData', JSON.stringify(this.productArray));
  }

  onReset(){
    this.productObj.productSku=''
    this.productObj.productName=''
    this.productObj.productFullName=''
    this.productObj.selectProduct=''
    this.productObj.enterPrice=0
    this.productObj.discountPrice=0
    this.productObj.totalPrice=0

  }
}

export class product {

  productId: number;
  productSku: string;
  productName: string;
  productFullName: string;
  selectProduct: string;
  enterPrice: number;
  discountPrice: number;
  totalPrice: number;
  otherProduct: string;



  constructor() {
    this.productId = 0,
      this.productSku = '',
      this.productName = '',
      this.productFullName = '',
      this.selectProduct = '',
      this.enterPrice = 0,
      this.discountPrice = 0,
      this.totalPrice = 0,
      this.otherProduct = ''
  }
}

