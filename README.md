# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à validar números de cartão de crédito, para uso em aplicações web.**
Na versão atual é capaz de checar se um número de cartão de crédito é válido utilizando o Algoritmo de Lunh.

## Os métodos utilizados na biblioteca são:

#### **cardValidador(numberCard);**

Exemplo de uso:

```
$node
> let convert = require("bru-card")
> cardValidator('5453010000066167'); //'True'
```


## versão 1.0.0

- funcionalidades: validação de um número de cartão de crédito;


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install bru-card`


## roadmap oficial do projeto


#### versão 2.0.0 (previsão outubro/2018)
- correção de bugs de espaçamento em números acima de 100000;
- delimitar o número de caracteres inseridos;
- README translated to english;

#### versão 1.0.1 (released)
- funcionalidades: validação de um número de cartão de crédito.
