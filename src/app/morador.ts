export class Morador {
    id: String;
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatoEmergencia: string;
    dataEntrada: string;

    constructor(nome: string, cpf: string, dataNascimento: string, contatoEmergencia: string, dataEntrada: string, id?: String) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.contatoEmergencia = contatoEmergencia;
      this.dataEntrada = dataEntrada;
    }
}
