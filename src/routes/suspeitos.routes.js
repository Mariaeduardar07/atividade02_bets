import { Router } from "express";

const supeitosRoutes = Router();

// Array com suspeitos
let candidatos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcello Carboni",
    profissao: "instrutor",
    envolvimento: "sim", // envolvimento em apostas 
    nivel: "médio", // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Santos",
    profissao: "docente",
    envolvimento: "sim", // envolvimento em apostas 
    nivel: "alto", // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Anna fiochi",
    profissao: "Advogada",
    envolvimento: "não", // envolvimento em apostas 
    nivel: "baixo", // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Sophia Balico",
    profissao: "Policial",
    envolvimento: "Sim", // envolvimento em apostas 
    nivel: "Médio", // nível de suspeita 
  },
];