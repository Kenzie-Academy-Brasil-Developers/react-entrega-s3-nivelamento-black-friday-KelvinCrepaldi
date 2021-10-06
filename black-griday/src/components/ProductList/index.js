import { Container } from "./styled";
import Product from "../Product";

const ProductList = ({ promoList, currentSale, setCurrentSale }) => {
  return (
    <Container>
      <h1>Lista de promoções</h1>
      {promoList.map((product) => (
        <Product
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      ))}
    </Container>
  );
};

export default ProductList;
