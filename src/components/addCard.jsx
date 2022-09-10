import React, {useState} from "react";
import FloatButton from "./FloatButton";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function AddCard(props){
    const [showAlert, setShowAlert] = useState(false);
    const [card, setCard] = useState({title:"", content:""});
    function changeCard(event){
        const name = event.target.name;
        const value = event.target.value;
        setCard((prev) => {
            return {
                ...prev,
                 [name]: value
            }
        });
    }

    function add(){
        if(card.title !== ""){
            setShowAlert(false);
            props.addItem(card);
            setCard(() => {
                return{
                    title: "",
                    content: ""
                }
            });
        }
        else{
            
            setShowAlert(true);
            
        }
        
    }
    return(
        <div className="center">
            { showAlert&&
                <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Please, write a title before add a new note.
                </Alert>
                </Stack>
            }
            
            <div class="card addCard">
                <div class="card-body">
                    <div className="form">
                        <input onChange={changeCard} value={card.title} name="title" type="text" class="form-control border border-0 add" placeholder="Title" />
                        <input onChange={changeCard} value={card.content} name="content" type="text" class="form-control border border-0 add content" placeholder="Take a note"  />
                    </div>
                </div>
                <FloatButton add={add}/>
            </div>
            
        </div>
    )
}


export default AddCard;