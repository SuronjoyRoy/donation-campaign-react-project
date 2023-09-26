import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Cards from "../../Cards/Cards";

const Home = () => {
    const cardData = useLoaderData();
    // console.log(cardData)
    return (
        <div>
            <Banner></Banner>
            <Cards cardData ={Cards}></Cards>
        </div>
    );
};

export default Home;