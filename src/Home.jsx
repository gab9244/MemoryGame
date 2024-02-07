import { useState, useEffect } from "react"

// RandomArray stores all the src of the img that will be used
const RandomArray = [
  {"src":"/MemoryGame/css-3.png"},
  {"src":"/MemoryGame/GitLogo.png"},
  {"src":"/MemoryGame/html.png"},
  {"src":"/MemoryGame/LI-In-Bug.png"},
  {"src":"/MemoryGame/ReactLogo.png"},
  {"src":"/MemoryGame/github-Logo.png"},
  {"src":"/MemoryGame/js.png"},
  {"src":"/MemoryGame/NodeLogo.png"}
]




export const Home = () => {
  const [Cards, setCard] = useState([])
  const [Count, setCount] = useState(0)
  const [MyArray, setMyArray] = useState([])


 const Rotation = ()=>{
  const cards = document.querySelectorAll(".cards")

  cards.forEach(card =>{
      card.classList.remove("roded")
      
    })
   }


    const ShowImg = ()=>{
    const cards = document.querySelectorAll(".cards")
    cards.forEach(card =>{
      card.classList.add("roded")
      
    })

    setTimeout(Rotation, 3000)
   }

 const cardDivs = document.querySelectorAll(".CardDiv")
    
   //This function is added to every squar and have the functionality of rotated a squar image every time its clicked and to add that squar img src to the state array MyArray. With that executing the useEffect validation
    const AddRotation = (event)=>{ 
                             event.currentTarget.querySelector("img").classList.add("roded")
        const elementValue = event.currentTarget.querySelector("img").src
        
        setMyArray((MyArray) => [...MyArray, elementValue]);
    
  }

  //Every time a values is add to the array MyArray, the useEffect code is executed and the validation is made
  useEffect(() => {


    if(MyArray.length > 2 ){
        MyArray.splice(0,2)
 
    } 

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

    
    if(MyArray.length == 2 && MyArray[0] != MyArray[1]){
        setTimeout(Rotation, 3000)
        setCount(1)
        setTimeout(removeStop,3000) 
    }

    if(MyArray.length == 2 && MyArray[0] == MyArray[1]){
        const Valid = document.querySelectorAll(".roded")
        Valid.forEach(element =>{
                element.classList.remove("cards")
                element.parentElement.classList.add("Done")
        })
        setCount(1)
        setTimeout(removeStop,0)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MyArray]);

  const StartGame = () => {
    const shuffledCards = [...RandomArray, ...RandomArray]
    .sort(()=>Math.random() - 0.5)
    .map((card) => ({ ...card, id:Math.random()}))

    setCard(shuffledCards)

    const Start = document.querySelector(".Start-btn")

    setTimeout(ShowImg, 0)
    Start.classList.add("Off")
       
    
  }

  return (
    <div>
       <div className="Board">
        {Cards.map(card => (
          <div className="CardDiv " onClick={AddRotation} key={card.id}>
            <img src={card.src} alt="card image" className="cards"/> 
          </div>
        ))}
       </div>
      <div className="Start-btn">
          <p>Spress the button to start the game</p>
        <button onClick={StartGame}>Start</button>
      </div>
    </div>
   
  )
 
}
