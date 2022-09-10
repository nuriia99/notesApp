import React, {useState} from "react";
import Header from './header.jsx';
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import AddCard from "./AddCard.jsx";


// const cards2 = [
//     {
//         title: "Work",
//         content: "Finish this app."
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

    

    return <div>
        <Header />
        <AddCard addItem={addItem}/>
        {cards.map( card => {
            return <Card title={card.title} content={card.content} />
        })}
        
        
        <Footer />
    </div>
}

export default App;