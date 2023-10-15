import { Footer } from "../../components/footer/Footer.jsx";
import { ProductsList } from "../../components/card/ProductsList";
import { Jumbotron } from "../../components/jumbotron/Jumbotron.jsx";
export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <ProductsList />

      <Footer />
    </>
  );
};
