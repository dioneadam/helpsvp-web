export class Medicamento {
    id: String;
    
    nome_comercial: string;
    nome_quimico: string;
    quantidade_minima: number;
    unidade_de_medida: string;
    tipo_embalagem: string;

    constructor(nome_comercial: string, nome_quimico: string, quantidade_minima: number, unidade_de_medida: string, tipo_embalagem: string, id?: String) {
        this.id = id;
        this.nome_comercial = nome_comercial;
        this.nome_quimico = nome_quimico;   
        this.quantidade_minima = quantidade_minima;
        this.unidade_de_medida = unidade_de_medida;
        this.tipo_embalagem = tipo_embalagem;
    }
}