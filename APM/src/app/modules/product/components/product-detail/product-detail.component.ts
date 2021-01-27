// components
import { Component, OnInit }      from '@angular/core';

// services
import { ActivatedRoute }         from '@angular/router';
import { HttpErrorResponse }      from '@angular/common/http';
import { ProductService }         from '../../../../services/product.service';
import { Router }                 from '@angular/router';

// interfaces
import { Product }                from '../../../../interfaces/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    // get product id for selected product from url
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;

      // get selected product
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      // on success
      (product: Product) => this.product = product,
      // on error
      (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.message
    );
  }

  onBack(): void {
    this.router.navigate(['/product']);
  }
}
