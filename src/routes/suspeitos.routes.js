import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcello Carboni",
    profissao: "instrutor",
    envolvimento: "sim", // envolvimento em apostas 
    nivel: "médio" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Santos",
    profissao: "docente",
    envolvimento: "sim", // envolvimento em apostas 
    nivel: "alto" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Anna fiochi",
    profissao: "Advogada",
    envolvimento: "não", // envolvimento em apostas 
    nivel: "baixo" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Sophia Balico",
    profissao: "Policial",
    envolvimento: "Sim", // envolvimento em apostas 
    nivel: "Médio" // nível de suspeita 
  },
];


// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });


export default suspeitosRoutes;