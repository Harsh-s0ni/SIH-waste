import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

export class PriceController {
  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data } = req.body;
      // make the api call over here!
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos/', data);
      res.status(200).json({ data: result.data });
    } catch (error) {
      next(error);
    }
  };
}
