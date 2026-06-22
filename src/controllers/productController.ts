import { Request, Response } from "express";
import pool from "../config/db";
import { Product } from "../models/Product";
import { validateProductFields } from "../lib/httpValidations";
import { calculateTotal } from "../service/calculateService";
import { insertProductService } from "../service/insertUserService";

export const ProductController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const { id, name, description } = request.body as Partial<Product>;

  const validation = validateProductFields(id!, name!, description!);

  var total = calculateTotal(5, 10)
  
  try {
    var newUser = insertProductService(id!, name!, description!);
    
    //retorna o resultado
    response.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating product:", error);
    response.status(500).json({
      message: "Error creating product"
    });
  }
};
