export interface IUser{
  id: number,
  nome: string,
  email: string;
  dataCriacao: null | Date,
  dataAtualizacao: null | Date,
  status: String,
  password: string;
  role: string,
}