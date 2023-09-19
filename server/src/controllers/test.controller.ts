import { NextFunction, Request, Response } from 'express';

export class TestController {
  public testApi = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({ Message: `Welcome to the world's leading API service` });
    } catch (error) {
      next(error);
    }
  };
}
