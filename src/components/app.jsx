import React, {useState} from "react";
import Header from './header.jsx';
import Card from "./Card.jsx";
import Footer from "./footer.jsx";
import AddCard from "./AddCard.jsx";


// const cards2 = [
//     {
//         title: "Work",
//         content: "Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app.Finish this app."
//     },
//     {
//         title: "English",
//         content: "Learn the phrasals verbs."
//     },
//     {
//         title: "University",
//         content: "Start the TFG."
//     }
// ];

function App(){
    const [cards, setCards] = useState([]);
    function addItem(card){
        setCards((prev) =>{
             return [...prev, card]
            });
    }
    function deleteCard(id){
        setCards((prev)=>{
            return prev.filter((card, index)=>{
                return index !== id
            })
        });
        
    }

    

    return <div>
        <Header />
        <AddCard addItem={addItem}/>
        {cards.map( (card, index) => {
            return <Card deleteCard={deleteCard} key={index} id={index} title={card.title} content={card.content} />
        })}
        
        
        <Footer />
    </div>
}

export default App;