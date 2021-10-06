import { Container } from "./styled";

const Product = ({ product, currentSale, setCurrentSale }) => {
  const handleClick = () => {
    setCurrentSale([...currentSale, product]);
  };

  return (
    <Container>
      <ul>
        <li>Nome: {product.name}</li>
        <li>Preço: {product.price}</li>
        <li>Porcentagem do desconto: {product.percentDiscountNumber}%</li>
        <li>Valor do desconto: {product.valueDiscount}</li>
        <li>Preço a ser pago: {product.finalValue}</li>
      </ul>
      <button onClick={() => handleClick(product)}>
        Adicionar no Carrinho
      </button>
    </Container>
  );
};

export default Product;
