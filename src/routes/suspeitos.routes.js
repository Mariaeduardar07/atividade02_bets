import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Marcello Carboni",
    profissao: "instrutor",
    envolvimento: "sim", // envolvimento em envolvimento 
    nivel: "médio" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe Santos",
    profissao: "docente",
    envolvimento: "sim", // envolvimento em aposta
    nivel: "alto" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Anna fiochi",
    profissao: "Advogada",
    envolvimento: "não", // envolvimento em aposto
    nivel: "baixo" // nível de suspeita 
  },

  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Sophia Balico",
    profissao: "Policial",
    envolvimento: "Sim", // envolvimento em aposta
    nivel: "Médio" // nível de suspeita 
  },
];


// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});


// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, profissao, envolvimento, nivel } = req.body;
  // Validação dos campos nome e profissao
  if (!nome || !profissao) {
    return res.status(400).send({
      message: "O nome ou o profissão não foi preenchido, não é possível cadastrar!",
    });
  }

  // Validação de  nível de suspeita deve ser "baixo", "médio" ou "alto".

  // Validação de envolvimento em aposta"sim" ou "não"


  // Rota para listar todos os suspeitos 
  suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

  // Rota para cadastrar um novo suspeito
  suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvimento, nivel } = req.body;

    // Validação dos campos nome e profissão
    if (!nome || !profissao) {
      return res.status(400).send({
        message: "O nome ou o profissão não foi preenchido corretamente!",
      });
    }
    // Criação de um novo suspeito
    const novoSuspeito = {
      id: Math.floor(Math.random() * 1000000),
      nome,
      profissao,
      envolvimento,
      nivel
    };
    // Adiciona o novo suspeito ao array de suspeito
    suspeitos.push(novoSuspeito);

    return res.status(201).json({
      message: "O suspeito foi cadastrado com sucesso!",
      novoSuspeito,

    });
  });



  // Rota para buscar um suspeito pelo id
  suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeito.find((procurado) => procurado.id == id);

    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `o suspeito com id ${id} não foi encontrado!` });
    }

    return res.status(200).json(suspeito);

  });
});

// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissao, envolvimento, nivel } = req.body;

  // Busca um suspeito id no array de suspeitos
  const suspeito = suspeitos.find((procurado) => procurado.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `o suspeito com id ${id} não foi encontrado!` });
    }

  suspeito.nome = nome;
  suspeito.profissao = profissao;
  suspeito.envolvimento = envolvimento;
  suspeito.nivel = nivel;
  

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
});

suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um candidato pelo id no array de candidatos
  const suspeito = suspeitos.find((procurado) => procurado.id == id);

  // Verifica se o candidato foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }

  // Remove o candidato do array de candidatos
  suspeitos = suspeitos.filter((procurado) => procurado.id != id);

  return res.status(200).json({
    message: "suspeito removido com sucesso!",
    suspeito,
  });
});


export default suspeitosRoutes;