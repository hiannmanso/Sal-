export interface Clinic {
  id: number;
  name: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereço: string;
  numero: string;
  bairro: string;
  estado: string;
  status: string;
  preço: number;
  atendimento: {
    inicio: string;
    fim: string;
  };
}
