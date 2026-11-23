Tive alguns problemas com tempo então fiz esse projeto para enviar como projeto Backend, ele é um CRUD completo que pode ser utilizado tanto via extensão Thunder(e semelhantes) ou via live Server. Nele utilizei autenticação JWT via cookies HTTPOnly e Interface Frontend, a stack utilizada foi: Node.js, Express, Sequelize, MySQL2, JWT, HTML,CSS/JS, Bcrypt, Cookie Parser, Nodemon, Cors, Dotenv

1-git clone https://github.com/HernandesNaWeb/FullStack-project-back-end

2-Logo após baixar você irá precisar de algumas coisas instaladas para rodar o projeto sem problemas
Node.js ---> download pelo navegador e instale no seu PC
Express ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i express'
Sequelize ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i sequelize'
MySQL ---> para armazenar os usuários que o projeto pode manipular é recomendado ter um gerenciador banco de dados no PC, eu utilizei o MySQL Workbench
JWT ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i jsonwebtoken'
Bcrypt ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i bcrypt'
Cookie Parser ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i cookie-parser'
Nodemon ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i nodemon'
Cors ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i cors'
Dotenv ---> instale via terminal no vscode (ou editor que usa), no vscode use 'npm i dotenv'

3-Para rodar o programa como disse pode escolher via Thunder* ou live Server
caso utilize o Thunder siga as rotas e a explicação no passo 5 para fazer o CRUD
Seja pelo Thunder ou pelo live Server antes de tudo siga esses passos: No terminal do editor inicie o arquivo index.js utilizando o comando 'node index.js', ele é o responsável pela comunicação entre o projeto e o banco de dados
logo após isso caso queira usar o live Server inicie ele abrindo o arquivo com nome CRUD.html

4-Com o CRUD.html aberto (lembre-se de utilizar o live Server ou semelhante para isso), você encontra-rá uma pagina com 2 formulários simples onde no primeiro você pode terá um campo para colocar Nome, Email e uma senha para realizar o cadastro e salvar as informações no banco de dados a senha é "hasheada" assim que clica em Cadastrar Usuário dando uma camada a mais de segurança para o usuário da aplicação, após isso temos um botão que permite ver todos os usuários cadastrados via console no navegador embora não precise. Logo abaixo tem outro formulario com outros 3 campos de texto poém a senha saiu e deu lugar ao ID e é atravez dele que é possivel fazer a alteração no usuário, note que não precisa alterar o Nome e o Email, você pode alterar apenas um deles desde que respeitando a obrigatoriedade do uso do ID no campo correto, mas caso você tenha cadastrado um usuário e não saiba o ID dele para fazer uma alteração não term problema, logo abaixo temos a ultima parte desse CRUD, uma tabela com os usuários cadastrados é automaticamente gerada a medida que os usuários vão sendo criados, nela aparece apenas o ID, o nome e o email, ao lado um botão de apagar faz exatamenete isso, ele apaga o usuário com um simples clique e confirmação da ação.

5-Para você que não quis ir pelo navegador mas sim pelo Thunder vamos as rotas
'http://localhost:3000/cadastro' no metodo POST para a criação dos usuários
'http://localhost:3000/usuario' no metodo GET para mostrar todos os usuários cadastrados no banco de dados
''http://localhost:3000/nome/:name' caso queira ver um usuário especifico pelo nome n metodo GET e substituindo o name pelo nome do usuário que foi salvo no banco de daos
'http://localhost:3000/usuario/:id' é semelhante ao anterior mas no utiliza o id do usuário e no metodo PUT é possivel alterar os dados do usuário via body com os paremetros (name, email, password) desde que saiba o id do mesmo, do mesmo modo é possivel apagar algum usuário com o metodo DELETE e chamando o id desejado na rota


