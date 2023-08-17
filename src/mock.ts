import { Column } from "./types/Column";
import { Task } from "./types/Task";

const mockTasks: Task[] = [
  {
    id: 1,
    name: "Revisar relatório",
    date: "2023-08-16",
    location: "Escritório",
    priority: "high",
    description: "Revisar o relatório mensal de vendas",
    status: "todo",
  },
  {
    id: 2,
    name: "Preparar apresentação",
    date: "2023-08-17",
    location: "Casa",
    priority: "low",
    description: "Criar uma apresentação para a reunião de equipe",
    status: "todo",
  },
  {
    id: 3,
    name: "Desenvolver funcionalidade X",
    date: "2023-08-18",
    location: "Escritório",
    priority: "critical",
    description: "Implementar a funcionalidade X no aplicativo",
    status: "inProgress",
  },
  {
    id: 4,
    name: "Revisar contrato",
    date: "2023-08-18",
    location: "Escritório",
    priority: "high",
    description: "Analisar e revisar o contrato com o fornecedor",
    status: "inProgress",
  },
  {
    id: 5,
    name: "Enviar relatório de despesas",
    date: "2023-08-19",
    location: "Casa",
    priority: "low",
    description:
      "Enviar o relatório de despesas do mês para o departamento financeiro",
    status: "inProgress",
  },
  {
    id: 6,
    name: "Testar nova atualização",
    date: "2023-08-20",
    location: "Escritório",
    priority: "high",
    description: "Realizar testes na nova atualização do software",
    status: "done",
  },
  {
    id: 7,
    name: "Entrevistar candidato",
    date: "2023-08-21",
    location: "Escritório",
    priority: "critical",
    description:
      "Conduzir entrevista com o candidato para a vaga de desenvolvedor",
    status: "done",
  },
  {
    id: 8,
    name: "Configurar servidor",
    date: "2023-08-22",
    location: "Data Center",
    priority: "high",
    description: "Configurar o novo servidor para o lançamento do produto",
    status: "done",
  },
  {
    id: 9,
    name: "Treinamento de equipe",
    date: "2023-08-23",
    location: "Sala de Treinamento",
    priority: "low",
    description: "Conduzir treinamento sobre as novas políticas da empresa",
    status: "done",
  },
  {
    id: 10,
    name: "Finalizar relatório financeiro",
    date: "2023-08-24",
    location: "Escritório",
    priority: "critical",
    description: "Concluir o relatório financeiro trimestral",
    status: "done",
  },
];

const columns: Column[] = [
  {
    id: "todo",
    title: "Para Fazer",
    tasks: mockTasks.filter((task) => task.status === "todo"),
  },
  {
    id: "inProgress",
    title: "Em Progresso",
    tasks: mockTasks.filter((task) => task.status === "inProgress"),
  },
  {
    id: "done",
    title: "Concluído",
    tasks: mockTasks.filter((task) => task.status === "done"),
  },
];

export default { columns, mockTasks };
