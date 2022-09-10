import React from "react";

function Card(props){
    function deleteCard(){
        props.deleteCard(props.id);
    }
    return <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
            </div>
            <button onClick={deleteCard} className="btn-delete"><i class="fa-solid fa-trash delete"></i></button>
            
        </div>
    </div>
}

export default Card;