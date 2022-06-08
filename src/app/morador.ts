export class Morador {
    id: String;
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string, id?: String) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    }
}

// export let m1 = new Material('Tijolo 6 furos', 'tijolo', 'UN', 10, 101);
// export let m2 = new Material('Pó para cimento Premium 20 kg', 'cimento', 'PC', 150, 102);
// export let m3 = new Material('Pó para cimento 50 kg', 'cimento', 'PC', 200, 103);


// export let TEST_MATERIALS :Material[] = [ m1, m2, m3 ];