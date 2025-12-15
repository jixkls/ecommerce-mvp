import dotenv from "dotenv";
import { createApp } from "./app.js";

dotenv.config();

const PORT = Number(process.env.PORT) || 3333;

const app = createApp();

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
