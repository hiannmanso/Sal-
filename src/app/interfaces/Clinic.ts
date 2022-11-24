export interface Clinic {
  id: number;
  nome: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  estado: string;
  status: string;
  preco: number;
  atendimento: {
    inicio: string;
    fim: string;
  };
}
