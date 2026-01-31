import express from "express";
import cors from "cors";
import helmet from "helmet";
import { logger } from "./middlewares/logger.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { errors } from "celebrate";
import boardRoutes from "./routes/boardRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import columnRoutes from "./routes/columnRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger());

const PORT = process.env.PORT ?? 3000;

app.use(boardRoutes);
app.use(cardRoutes);
app.use(columnRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on server: ", PORT);
});
