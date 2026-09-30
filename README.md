# Desafio Accenture

Desafio de automação da empresa Accenture.
A automação foi desenvolvida utilizando Cypress com código simples, organização dos testes e reutilização através de Page Objects e etc.

## Tecnologias usadas

- JavaScript
- Cypress
- Node.js
- npm
- Git
- GitHub

## Instalação

Clonar repositório:

```bash
git clone https://github.com/joelrocha68/desafio-accenture.git
```

Acessar pasta:

```bash
cd desafio-accenture
```

Instalar dependencias:

```bash
npm install
```

## Executar testes

Rodar todos os testes:

```bash
npm test
```

Abrir Cypress modo interativo:

```bash
npm run cy:open
```

Executar testes modo headless:

```bash
npm run cy:run
```

## Cenários colocados

- Practice Form

- Web Tables

- Progress Bar

- Browser Windows

- Sortable



## Cenários não concluidos

### Browser Windows

Não foi concluida a questão da nova janela aberta pelo navegador.

Ficou pendente:

- A mudança de contexto para a nova janela;
- Verificação da mensagem 'This is a sample page';
- E também o fechamento da nova janela.

### Sortable

Não foi concluída a automação de drag and drop, que era pra colocar os elementos em ordem crescente.



## Observações vistas durante os testes

### Practice Form - botão Close

Foi visto que apos o preenchimento e envio do formulário, o modal de confirmação é apresentado mas  o botão `Close` não fechava o modal.
No teste foi feito o fechamento do modal atraves do clique fora do modal.

### Progress Bar - comportamento apos Reset

Foi observado durante a execução do teste automatizado que, apos a Progress Bar atingir 100% e o botão `Reset` ser clicado, a barra retornava para 0% e iniciava novamente automaticamente de 0 pra 100. Mas esse comportamento não foi reproduzido durante o teste manual.



## Autor

Joel Rocha
