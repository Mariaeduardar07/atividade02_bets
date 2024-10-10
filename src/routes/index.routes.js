import { Router } from "express";

import suspeitoRoutes from "../routes/suspeitos.routes.js"

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message:"Suspeito cadastrado" });
});

routes.use("/suspeitos", suspeitoRoutes);

export default routes;