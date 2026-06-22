import { ProductRepository } from "../database/productRepository";
import { Product } from "../models/Product";


export class userService {
    
}

export async function insertProductService(id:number, name:string, description:string): Promise<Product> {
    //regra de negfocio
    if(name != "Biscoito"){
        throw new Error("Invalid product name");
    }

    // var createProduct = insertProductRepository(id, name, description);
    var productRepository =  new ProductRepository({name, description});
    const result = productRepository.createProduct();
  
    return result;
}