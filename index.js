const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação que verifica igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um método de string usado para encontrar a posição de uma substring?",
      respostas: [
        "findIndex()",
        "indexOf()",
        "search()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes é um loop de repetição em JavaScript?",
      respostas: [
        "for-each",
        "while",
        "next()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um operador lógico em JavaScript?",
      respostas: [
        "&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toNumber()",
        "parseNumber()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para transformar uma array em uma string em JavaScript?",
      respostas: [
        "join()",
        "concat()",
        "merge()",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template= document.querySelector('template')
  
  const corretas = new Set()
  const TotalDePerguntas = perguntas.length
  const MostrarTotal = document.querySelector('#acertos span')
  MostrarTotal.textContent = corretas.size + 'de' + TotalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta= event.target.value == item.correta //true
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      MostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  quizItem.querySelector("dl dt").remove()
  
  //coloca a pergunta na tela
  
  quiz.appendChild(quizItem)
    
  
  }