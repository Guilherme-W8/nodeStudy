# Node.js Study Repository
Bem-vindo ao meu repositório de estudos de Node.js! Aqui, vou documentar todo o meu aprendizado, desde os conceitos fundamentais até tópicos mais avançados, incluindo a utilização do Express.js.

<!--Divisão do módulo 1-->

<details>
    <summary>
        Módulo 1 - Introducion
    </summary>
    <br>
    
>Nesta seção, aprendi os fundamentos essenciais para começar com Node.js

1. O que é Node.js – Entendimento básico sobre o que é o Node.js, um ambiente de execução para JavaScript no lado do servidor.
 
2. npm – O que é o npm (Node Package Manager), seu uso para gerenciar pacotes e dependências.

3. Instalação – Como instalar o Node.js em diferentes sistemas operacionais (Windows e Linux), além do VS Code e Cmder, ferramentas de desenvolvimento.
 
4. Primeiros passos com Node.js – Execução de scripts básicos no Node.js, incluindo a criação do primeiro programa e uso de módulos.

</details>

<!--Divisão do módulo 2-->

<details>
    <summary>
        Módulo 2 - Fundamentals
    </summary>
    <br>
    
>Nesta seção, aprofundei meus conhecimentos em Node.js, explorando conceitos essenciais.

1. Módulos – Entendimento do que são módulos, incluindo internos e externos, e a diferença entre importação e exportação de módulos.

2. Core Modules – Uma visão sobre os módulos nativos do Node.js e sua utilidade.
Argumentos da linha de comando – Como ler e manipular argumentos fornecidos ao executar scripts no terminal.

3. Console e visualização – Técnicas para melhorar a visualização no console e a manipulação de dados de entrada.

4. Event Loop e Event Emitter – Conceitos do Event Loop e o funcionamento do Event Emitter para lidar com eventos no Node.js.

5. Execução síncrona e assíncrona – Diferença entre operações síncronas e assíncronas no Node.js.

6. Tratamento de erros – Como o Node.js gerencia erros e boas práticas para tratá-los.
    
</details>

<!--Divisão do módulo 3-->

<details>
    <summary>
        Módulo 3 - Core Modules
    </summary>
    <br>
    
>Nesta seção, aprofundei meus conhecimentos em Core Modules do Node!

1. Module http: Como instanciar um servidor. Usei a classe createServer para criar o servidor e listen para definir a porta da aplicação. No exemplo prático, retornei um HTML para a página.

2. Module url: - O módulo url serve para isolar uma URL que passamos para o método parse. Podemos resgatar: host, path, search, query e etc. A partir desses dados, podemos alterar a lógica do nosso programa. Usei para definir a lógica quando tivesse entrada de argumentos pela url do servidor http.

3. Module File System: O módulo File System (ou 'fs') é utilizado para manipular arquivos e diretórios. Usei para renderizar um arquivo HTML em um servidor http.

4. Module path: Serve para manipulação de caminhos de arquivos. Utilizei diversos módulos para saber mais sobre um path fictício e também fiz a criação de um path dinâmico.

</details>

<!--Divisão do módulo 4-->

<details>
    <summary>
        Módulo 4 - NPM Fundamentos
    </summary>
    <br>
    
>Nesta seção, aprofundei meus conhecimentos em Gerenciamento de Pacotes Node com npm.

1. Podemos gerenciar pacotes, configurar projeto e rodar scripts.

2. A criação de um projeto NPM sempre gera um arquivo package.json. Visualizei como funciona a organização desse arquivo.

3. Instalar módulos em ambiente de desenvolvimento.

4. Executando scripts com NPX.


</details>

<!--Divisão do módulo 5-->

<details>
    <summary>
        Módulo 5 - Projeto Accounts
    </summary>
    <br>
    
>Criação de um projeto utilizando todos os conceitos e tecnologias aprendidas até o momento

1. Projeto roda no terminal, contém criação de conta, manipulação de saldo e estilização das opcções

2.  Foram utilizados módulos internos como por exemplo o File System e módulos externos como o Chalk e Inquirer

3.  Criação de fluxo de lógica com estruturas do Node.js

4. Organização de funções para cada tarefa

</details>

<!--Divisão do módulo 6-->

<details>
    <summary>
        Módulo 6 - Express
    </summary>
    <br>
    
>Introdução ao Express, framework poderoso para criação e gerenciamento de rotas

1. Foi instalado e feita a execução de alguns parâmetros e Middlewares importantes

2. Middlewares utilizados: Leitura de corpo da requisição, arquivos estáticos, desenvolvimento de middleware

3. Criação e gerenciamento de diversas rotas

</details>

<!--Divisão do módulo 7-->

<details>
    <summary>
        Módulo 7 - Template Engine
    </summary>
    <br>
    
> Aqui foi desenvolvido aplicações e conceitos de Template Engines (Handlebars)

1. Criação de Layouts com Handlebars

2. Estruturas de controle e condicionais

3. Integrando CSS com Handlebars

4. Utilizando Partials 

</details>

<!--Divisão do módulo 8-->

<details>
    <summary>
        Módulo 8 - Integração Node com MySQL
    </summary>
    <br>
    
> Neste módulo foi abordado sobre instalação, gerenciamento e integração do MySQL com Node.js

1. Instalação e aplicação do MySQL nos ambiente de Linux e Windows 

2. Ferramenta de visualização Workbench
 
3. Operações básicas no banco com Node.js: Criação de tabelas, inserção/remoção de dados, preenchimento de formulário, atualização de registro 

4. Implementação de Connection Pool

</details>

<!--Divisão do módulo 9-->

<details>
    <summary>
        Módulo 9 - Node.js com ORM Sequelize
    </summary>
    <br>
    
> Neste módulo foi abordado sobre Sequelize e como utilizamos essa ferramenta para desenvolver conexão e gerenciamento de funcções do banco de dados mais facilmente.

1. IInstalação e aplicação do Sequelize em rotas Express

2. Criando Models: User e Address
 
3. Métodos de banco de dados: Inserção, resgate e exclusão

4. Relacionamento entre as tabelas 

</details>
