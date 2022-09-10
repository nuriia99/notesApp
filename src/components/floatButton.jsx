import React from "react";

function FloatButton(props){
    return <div>
        <button onClick={props.add} className="float">
          <i class="fa-solid fa-plus plus"></i>
        </button>
 
        
    </div>
}

export default FloatButton;