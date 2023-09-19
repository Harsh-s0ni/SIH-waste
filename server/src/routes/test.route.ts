import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { TestController } from '@/controllers/test.controller';

export class TestRoute implements Routes {
  public path = '/test';
  public router = Router();
  public test = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.test.testApi);
  }
}
