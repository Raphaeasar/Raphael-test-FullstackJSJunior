# Raphael-test-FullstackJSJunior

Para rodar o projeto: 1° passo:

É necessário instalar o pacote de dependências. Após descompactar os arquivos, no diretório raiz do projeto, digitar o seguinte comando no terminal:

npm install

2° Passo:
É necessário instalar pgAdmin 4 na máquina pois é banco de dados Postgressql. Após instalar ele, será necessário subir a base de dados do projeto no pgAdmin 4.
O arquivo se encontra na pasta: base de dados/fullstack.sql

3° passo:

Agora é so rodar o projeto. Digitar o comando no terminal:

npm run dev

Usar o Insomnia ou Postman para fazer teste das rotas da API.

Rota para listar todos os usuário: http://localhost:3333/api/v1/users, Método GET;

Rota para listar único usuário: http://localhost:3333/api/v1/users/id, Método GET;

Rota para criar único usuário: http://localhost:3333/api/v1/users, Método POST;

Rota para alterar único usuário: http://localhost:3333/api/v1/users/id, Método PUT;

Rota para excluir todos os usuário: http://localhost:3333/api/v1/users, Método DELETE.

Rota para deletar único usuário: http://localhost:3333/api/v1/users/id, Método DELETE;
