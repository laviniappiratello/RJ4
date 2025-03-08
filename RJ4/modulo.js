export class Cliente{ //o export antes da classe é pra poder usar ela em outros arquivos
    constructor(nome, cpf){
        this.nome= nome;
        this.cpf=cpf;
        this.telefones=[]; //lista pq pode ser mais de um (vazia)
    }
    adicionarTelefone(numero){
        this.telefones.push(numero); // add elementos no final do array
    }
    getDescricao(){
        return `Nome do cliente: ${this.nome} | Cpf: ${this.cpf} | Telefones: ${this.telefones.join(', ')}`;  //separa os elementos c virgula 
    }
}

export class Telefone{
    constructor(numero){
        this.numero=numero;
    }
}

export class Endereco{
    constructor(rua, cidade){
        this.rua= rua;
        this.cidade=cidade;
    }
    getDescricao() {
        return `${this.rua}, ${this.cidade}`;
    }
}
//primeiro cria o cliente, endereco e telefone dps cria a empresa q usa todos esses 
export class Empresa{
    constructor(nome, cnpj){
        this.nome= nome;
        this.cnpj= cnpj;
        this.telefones= [];
        this.endereco= null;
        this.clientes=[];
    }
    adicionarTelefone(numero){
        this.telefones.push(numero);
    }
    adicionarEndereco(endereco){
        this.endereco= endereco;
    }
    adicionarCliente(cliente){
        this.clientes.push(cliente);
    }
    getDescricao() {
        return `Empresa: ${this.nome} | CNPJ: ${this.cnpj}\nEndereço: ${this.endereco ? this.endereco.getDescricao() : 'Não definido'}\nTelefones: ${this.telefones.join(', ')}\nClientes => \n${this.clientes.map(c => c.getDescricao()).join('\n')}`;
    }

}