import pool from "../config/db";
import { Product } from "../models/Product";

interface IProduct {
    id?: number;
    name: string;
    description: string;
}

export class ProductRepository {

    public product: IProduct;

    constructor(Iproduct: IProduct) {
        this.product = Iproduct;
    }

    public async createProduct() {
        const name = this.product.name;
        const description = this.product.description;
        const id = Math.floor(Math.random() * 1000) + 1; // Gerar um ID aleatório entre 1 e 1000

        const query = `
      INSERT INTO products (id, name, description)
      VALUES ($1, $2, $3)
      RETURNING id, name, description
    `;
        const values = [id, name, description];

        // faz a query
        const result = await pool.query<Product>(query, values);
        return result.rows[0];
    }

}
