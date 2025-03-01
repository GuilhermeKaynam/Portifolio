import { Project } from '../types';

export const projects: Project[] = [
  // Backend Projects
  {
    id: 1,
    title: "Conta Bancária",
    description: "Um projeto de conta bancária feito em Java, onde é possível criar conta, depositar dinheiro, fazer transferência e sacar dinheiro.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/GuilhermeKaynam/Conta-Bancaria",
    type: "backend",
    technologies: ["Java", "OOP"]
  },
  {
    id: 2,
    title: "FitPlanner",
    description: "Um sistema feito em Java, um CRUD completo para sistema de academia, podendo cadastrar aluno, cadastrar treino, cadastrar exercício, repetição e séries.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/GuilhermeKaynam/BackEnd-FitPlanner",
    type: "backend",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 3,
    title: "CRUD Farmácia",
    description: "Um CRUD de farmácia feito em Java que permite cadastrar medicamentos, adicionar data de validade, imprimir medicamentos com data de validade próxima e vencidos, e cadastrar categorias como controlado, genérico entre outros.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    link: "https://github.com/GuilhermeKaynam/CRUD-Farmacia",
    type: "backend",
    technologies: ["Java", "Spring Boot", "MySQL"]
  },
  
  // Frontend Projects
  {
    id: 4,
    title: "Buffet Grill",
    description: "Um site para um buffet de churrasco gaúcho, criado com React e Tailwind, pensando na melhor experiência do usuário.",
    image: "https://i.imgur.com/xG25jJA.jpeg",
    link: "https://www.buffetgrill.com.br/",
    type: "frontend",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "TC Turismo",
    description: "O TCturismo é um site de turismo para empresas e famílias, criado com React e Tailwind, pensando na melhor experiência do cliente.",
    image: "https://i.imgur.com/Z8aqmfk.jpeg",
    link: "https://www.tcturismors.com/",
    type: "frontend",
    technologies: ["React", "Tailwind CSS"]
  }
];