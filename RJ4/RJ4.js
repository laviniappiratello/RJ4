import * as modulo from './modulo.js'; //  importando as classes q tinha usado export antes no outro arquivo

const empresa= new modulo.Empresa('empresa', '123445667788');
empresa.adicionarEndereco(new modulo.Endereco('praça afonso pena, 123', 'sao jose dos campos'));

empresa.adicionarTelefone('12 1234-1234');
empresa.adicionarTelefone('12 1234-5678');

const cliente1= new modulo.Cliente('lavinia', '123456789');
cliente1.adicionarTelefone('12 0923-3321');
cliente1.adicionarTelefone('12 0343-2221');

const cliente2= new modulo.Cliente('ana julia', '0987654');
cliente2.adicionarTelefone('12 1111-4532');
cliente2.adicionarTelefone('12 1368-7654');

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);

console.log(empresa.getDescricao());

// so adicionando empresa e clientes e depois exibindo