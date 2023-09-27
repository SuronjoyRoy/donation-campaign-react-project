// import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";
import Card from "../../Cards/Card";
import Banner from "../../Header/Banner/Banner";
// import Cards from "../../Cards/Cards";
import { useEffect, useState } from "react";

const Home = () => {
    const [filterData, setFilterdata] = useState([])
    const [cards,setCards] = useState([])
    

    useEffect(()=>{
        fetch('Cards.json')
        .then(res=> res.json())
        .then(data =>{
            setCards(data)
            setFilterdata(data)
        } )
        

    },[])
    console.log(cards)

    const hanldSearch = () =>{
        const searcFilter = document.getElementById('serchFilter')
        const searchFilterValue = searcFilter.value;
        if(searchFilterValue==='health'){
            const healthCt = cards.filter(category=>category.category='Health')
            setFilterdata(healthCt)
        }
        else if(searchFilterValue==='Food'){
            const healthCt = cards.filter(category=>category.category='Food')
            setFilterdata(healthCt) 
        }
        else if(searchFilterValue==='Education'){
            const healthCt = cards.filter(category=>category.category='Education')
            setFilterdata(healthCt) 
        }
        else if(searchFilterValue==='Clothing'){
            const healthCt = cards.filter(category=>category.category='Clothing')
            setFilterdata(healthCt) 
        }
    }

    return (
        <div>
            <Banner hanldSearch={hanldSearch}></Banner>
            {/* <Cards cards ={cards}></Cards> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
                {
                    filterData.map(card=> <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;