import { Injectable, Param } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [
        {id: 1, categoryId: 1, productName: "Samsung Galaxy S21 FE 5G 8/256GB", price: 9990000},
        {id: 2, categoryId: 2, productName: "Iphone 11 128GB White", price: 13000000},
        {id: 3, categoryId: 3, productName: "Sony XZ1", price: 1500000},
        {id: 4, categoryId: 4, productName: "Sony XZ2", price: 2500000},
        {id: 5, categoryId: 5, productName: "Sony XZ3", price: 3500000},
        {id: 6, categoryId: 6, productName: "Sony XZ4", price: 4500000},
    ]
    
    getProducts(): Product[] {
        return this.products;
    }

    createProduct(productDto : ProductDto): Product  {
        const newProduct: Product = {
            id: Math.random(),
            ...productDto
        };
        this.products.push(newProduct);

        return newProduct;
    }

    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(productDto : ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id));

        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;

        return this.products[index];

    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index === -1) {
            return false;
        }
        this.products.splice(index, 1);
        return true;
    }
}