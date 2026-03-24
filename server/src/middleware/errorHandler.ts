import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.log.error(err);

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';
  const message = err instanceof Error ? err.message : 'Internal server error';

  console.log(err);

  res.status(500).json({
    message: isProd ? 'Oops, there is an error' : message,
  });
};
