import { useState, useEffect } from 'react';

export const Board = () => {
 const [Count, setCount] = useState(0)
 const [MyArray, setMyArray] = useState([])
 const [Valided, setValided ] = useState(false)

 const Rotation = ()=>{
    const cards = document.querySelectorAll(".cards")
  
    cards.forEach(card =>{
        card.classList.remove("roded")
        
      })
     }
    //O jogo 
    // .Depois que o botão de start for apertado o jogo começará e as imagens seram monstrada (x)
    // .Apois 5 segundos as imagens seram viradas e o jogo começará (x)
    // .O primeiro turno e do player, ele deve escolher duas imagens, caso elas sejam iguais o jogador marca 1 ponto ()
    // .A AI jogará depois do player se ela acertar também marcará 1 ponto ()
    // .O jogo abaca quando todas as imagens forem reveladas e o vencedor será quem fez mais pontos ()
    

    //Lógica
    

    //Depois que clicamos em um quadrado uma imagem deve ser monstrada e depois de 2 imagens serem monstradas, se elas forem iguais asbas devem ficar ativas, esse processo deve continuar até todas as imagens estiverem ativas

    //como fazer com que apenas duas imagens possam ser clicadas:
            //1.Todas as divs começam com uma classe e quando forem clicadas a classe e removida e a imagens e monstrada
              //1.1. Usarei useState para criar uma variavel e aumentar o seu valor sempre que uma div for clicada, caso a variavel tenha um valor maior ou igual a 2 o jogo reinicia 
            //


    //O primeiro turno e do jogador e depois de ele ativinhar duas imagens é a vez do AI
    //Tanto o jogador quanto a AI fazem pontos 
    //O vencedor será quem diver mais pontos 

   
    //Use o currentTarget para pegar o valor dos elementos e os compare

    //Porque quando eu clico no elemento apenas o proximo a adicionado na array
    //O problema é que pelo React renderizar tudo de uma vez  o useState começa com o seu valor inicial sendo uma array vazia , então só o proximo click irá mudar o valor de useState
    // Para resolver o problema use useEffect
    //UseEffect funciona da seguinte maneira, sempre que houver uma mudança no elemento que está dentro das traves o código que está dentro do useEffect será executado
    //Como fez com que o valor de Valided seja atualizado antes de passar pelos argumentos 

    //Como fazer com que apenas as peças validas fiquem viradas?
     //A solução que eu encontrei foi a seguinte: Se o tamanho da array for igual a dois e os valores dos itens da array forem iguais, vamos selecionar todos os elementos que possuirem a classe roded e removemos a classe cards. A lógica é que apenas as peças que são validas possuiem a classe roded, já que se forém invalidas a classe e removida com a função Rotation no setTimeout().


    //Como randomizar as imagens?
    //Criar um modo de dois jogadores 
    

    const cardDivs = document.querySelectorAll(".CardDiv")
    

    const AddRodation = (event)=>{ 
                             event.currentTarget.querySelector("img").classList.add("roded")
        const elementValue = event.currentTarget.querySelector("img").src
        
        setMyArray((MyArray) => [...MyArray, elementValue]);
    
  }
  //Sempre que a array MyArray for alterada o seguinte código é executado
  useEffect(() => {
   

    //Se o tamanho da array for maior que 2, usamos splice() e removemos os itens da array para que novos possam ser adicionadas

    if(MyArray.length > 2 ){
        MyArray.splice(0,2)
        
       
    } 
   
    //remove o stop
     const removeStop =()=>{
        cardDivs.forEach(cardDiv =>{
        cardDiv.classList.remove("stop")
        })
        }


    setCount(Count+1)
   
    if(Count == 2) {    
        cardDivs.forEach(cardDiv =>{
            cardDiv.classList.add("stop")
          
        })


    }

    //Se o tamanho da array for igual a dois e os valores dos itens da array forem diferentes, mude o valor de Valided para false, use o setTimeout para rodar as peças, mude o valor de Count para 1 e por fim use setTimeout para remover o stop em 3 segundos
    if(MyArray.length == 2 && MyArray[0] != MyArray[1]){
        setValided(false)
        setTimeout(Rotation, 3000)
        setCount(1)
        setTimeout(removeStop,3000)
        

      
       
    }
    //Se o tamanho da array for igual a dois e os valores dos itens da array forem iguais, mude o valor de Valided para true, use o setTimeout para rodar as peças, mude o valor de Count para 1 e por fim use setTimeout para remover o stop
    if(MyArray.length == 2 && MyArray[0] == MyArray[1]){
        const Valid = document.querySelectorAll(".roded")
        Valid.forEach(element =>{
                element.classList.remove("cards")

        })
        setValided(true)
        setCount(1)
        setTimeout(removeStop,0)
        


     
    }

    console.log(MyArray)

    
  }, [MyArray]);

// Como remover a classe cards das peças que forem certas, sem remover as 
  useEffect(()=>{
  
    console.log(Valided)


  },[Valided])
   


  return (
    <div className="Board">
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/css-3.png" alt="CSS logo" className="cards css"   />
        </div>
        <div className="CardDiv stop"  onClick={AddRodation}>
            <img src="/MemoryGame/GitLogo.png" alt="" className="cards gitlogo"  />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/html.png" alt="" className="cards html" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/LI-In-Bug.png" alt="" className="cards linkedin" />
        </div>
        <div className="CardDiv stop"  onClick={AddRodation}>
            <img src="/MemoryGame/ReactLogo.png" alt="" className="cards react" />
        </div> 
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/ReactLogo.png" alt="" className="cards react" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/LI-In-Bug.png" alt="" className="cards linkedin" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/html.png" alt="" className="cards html" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/github-Logo.png" alt="" className="cards github" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/github-Logo.png" alt="" className="cards github" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/js.png" alt="" className="cards js" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/js.png" alt="" className="cards js" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/NodeLogo.png" alt="" className="cards node" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/NodeLogo.png" alt="" className="cards node" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/GitLogo.png" alt="" className="cards gitlogo" />
        </div>
        <div className="CardDiv stop" onClick={AddRodation}>
            <img src="/MemoryGame/css-3.png" alt="" className="cards css" />
        </div>
        
    </div>
  )
}
