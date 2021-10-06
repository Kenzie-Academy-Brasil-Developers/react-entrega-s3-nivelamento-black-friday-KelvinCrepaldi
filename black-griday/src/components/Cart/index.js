import { Container } from "./styled";

const Cart = ({ currentSale }) => {
  const total = currentSale.reduce(
    (previous, current) => previous + parseFloat(current.finalValue),
    0
  );

  return (
    <Container>
      <h1>Carrinho</h1>
      <h3>{`Total da compra: ${total.toFixed(2)}`}</h3>
      {currentSale.map((product) => (
        <div className="product">
          <ul>
            <li>Nome: {product.name}</li>
            <li>Preço: {product.price}</li>
            <li>Porcentagem do desconto: {product.percentDiscountNumber}%</li>
            <li>Valor do desconto: {product.valueDiscount}</li>
            <li>Preço a ser pago: {product.finalValue}</li>
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default Cart;
