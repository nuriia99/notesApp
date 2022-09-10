import React, {useState} from "react";
import Header from './header.jsx';
import FloatButton from "./floatButton.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import AddCard from "./addCard.jsx";

function App(){
    const [cards, setCards] = useState([]);

    return <div>
        <Header />
        <AddCard />
        {cards.map((card) =>{<Card title="hola" content="hjofe" />} )}
        <Card title="hola" content="hjofe" />
        <Footer />
    </div>
}

export default App;