# Desafio 3️⃣

## Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

### Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}")
- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

1. Se mago -> no ataque exibir (usou magia)
2. Se guerreiro -> no ataque exibir (usou espada)
3. Se monge -> no ataque exibir (usou artes marciais)
5. Se ninja -> no ataque exibir (usou shuriken)

### Saída

Ao final deve se exibir uma mensagem:

`O {tipo} atacou usando {ataque}!`
  
**EX**: 
  - mago atacou usando magia
  - guerreiro atacou usando espada