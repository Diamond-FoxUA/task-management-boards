import { HttpError } from "http-errors";

export const errorHandler = (req, res, err, ext) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';
  res.status(500).json(
    { msg: isProd ? "Opps, it's an error!" : err.message }
  );
};
