// É possível comparar os valores das src dos elementos.

const Rotation = ()=>{
  const cards = document.querySelectorAll(".cards")

  //Como adicionar as src aleatóriamente, repetindo apenas duas vezes e não adicionando mais de uma src por img?
   //

     const RandomArray = [
      "/MemoryGame/css-3.png", "/MemoryGame/GitLogo.png", "/MemoryGame/html.png", "/MemoryGame/LI-In-Bug.png", "/MemoryGame/ReactLogo.png", "/MemoryGame/github-Logo.png", "/MemoryGame/js.png", "/MemoryGame/NodeLogo.png","/MemoryGame/css-3.png", "/MemoryGame/GitLogo.png", "/MemoryGame/html.png", "/MemoryGame/LI-In-Bug.png", "/MemoryGame/ReactLogo.png", "/MemoryGame/github-Logo.png", "/MemoryGame/js.png", "/MemoryGame/NodeLogo.png"
    ]
  cards.forEach(card =>{
      card.classList.remove("roded")
      
    })
   }
export const Home = () => {
  
  const StartGame = () => {
    const cards = document.querySelectorAll(".cards")
    const Start = document.querySelector(".Start-btn")
    const CardDiv = document.querySelectorAll(".CardDiv")
    CardDiv.forEach(cardDiv =>{
      cardDiv.classList.remove("stop")
    })
    Start.classList.add("Off")
    cards.forEach(card =>{
      card.classList.add("roded")
      

    })
    setTimeout(Rotation, 1000)

  }
  return (
    <div className="Start-btn"><button onClick={StartGame}>Start</button></div>
  )
 
}
