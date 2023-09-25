import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";

const Home = () => {
    const myCard = useLoaderData();
    console.log(myCard)
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;