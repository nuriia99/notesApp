import React from "react";
import Header from './header.jsx';
import FloatButton from "./floatButton.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
    {
        title: "Work",
        content: "Finish this app."
    },
    {
        title: "English",
        content: "Learn the phrasals verbs."
    },
    {
        title: "University",
        content: "Start the TFG."
    }
];

function App(){
    return <div>
        <Header />
        <FloatButton />
        <div className="div-cards">
        {cards.map( card => {
            return <Card title={card.title} content={card.content} />
        })}
        </div>
       
        <Footer />
    </div>
}

export default App;