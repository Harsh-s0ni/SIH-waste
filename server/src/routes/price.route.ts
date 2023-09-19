import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import { PriceController } from '@/controllers/price.controller';

export class PriceRoutes implements Routes {
  public path = '/price';
  public router = Router();
  public price = new PriceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/get`, this.price.get);
  }
}
