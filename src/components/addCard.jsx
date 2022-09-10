import React from "react";
import FloatButton from "./floatButton";

function addCard(){
    return(
        <div className="center">
            <div class="card addCard">
                <div class="card-body">
                    <div className="form">
                        <input name="titleCard" type="text" class="form-control border border-0 add" placeholder="Title" />
                        <input name="contentCard" type="text" class="form-control border border-0 add content" placeholder="Take a note"  />
                    </div>
                </div>
                <FloatButton />
            </div>
            
        </div>
    )
}


export default addCard;