import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardShow from "./CardShow";

const SingleCard = () => {
    const {id} = useParams()
    const [card, setCard] = useState([])

    const cards = useLoaderData()
    useEffect(()=>{
        const findCard = cards.find(card=> card.id ==id)
        setCard(findCard)
    },[id,cards])
    
    return (
        <div>
             <CardShow card={card}></CardShow>               
        </div>
                );
            };

export default SingleCard;