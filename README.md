
# Desafio Técnico - Desenvolvedora Full Stack Sync360

Este repositório foi criado para a API do desafio técnico do processo seletivo "Desenvolvedora Full Stack" na **Sync360**.

## Descrição do Desafio

O desafio consiste em desenvolver uma aplicação onde exibida os dados de um usuário e o usuário consiga editá-los com uma interface intuitiva e responsiva. 

Mas tomei a liberdade de acrescentar:
- Cadastro de usuário
- Login
- Excluir usuário pelo id
- Listar todos os usuários

## Executando o Script

Para executar o script, siga os passos abaixo:

### Instalação

1.  Clone este repositório em sua máquina local usando o seguinte comando:

    ```bash
    git clone https://github.com/flavicastelo/api_user_profile/.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd api_user_profile/
    ```
3.  Instale as dependências usando NPM:
    ```bash
    npm install
    ```

### Configurando o Banco de Dados
1. Importe o arquivo `create_database.sql` para o MySQL Workbench ou outro cliente MySQL.
2. Execute o script.
3. Altere as configurações de conexão no arquivo `database.js` para usar o nome do seu banco de dados e suas credenciais.
4.  Adicione um arquivo .env na raíz do projeto:
    ```javascript
    DBPASS = "sua_senha_do_mysql"
    SECRET = "adicione_uma_secret"
    ```    
5. Inicie o servidor de desenvolvimento:
    ```bash
    npm run start
    ```   
    
##  Tecnologias usadas
![](https://img.shields.io/badge/Node-v18.15.0-green) ![](https://img.shields.io/badge/Npm-v9.5.0-purple) ![](https://img.shields.io/badge/MySQL-v8.0.36_0ubuntu0.22.04.1-blue) ![](https://img.shields.io/badge/JWT-v9.0.2-brown) ![](https://img.shields.io/badge/Express-v4.19.2-white) 


## Desenvolvedora
 [Flaviana Castelo](https://github.com/flavicastelo)
