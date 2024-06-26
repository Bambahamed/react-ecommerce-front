import Jumbotron from "../components/cards/Jumbotron";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Product", "New Arrivals", "Best Sellers"]} />
      </div>
      <h4 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">
        Categories
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-5 jumbotron">
        Sub Categories
      </h4>
      <SubList />
      <br />
      <br />
    </>
  );
};

export default Home;
