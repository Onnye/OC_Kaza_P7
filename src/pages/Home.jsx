import Banner from "./../components/Banner";
import CardContainer from "../components/Card/CardContainer";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="home-page">
        <CardContainer />
      </div>
    </>
  );
};

export default Home;
