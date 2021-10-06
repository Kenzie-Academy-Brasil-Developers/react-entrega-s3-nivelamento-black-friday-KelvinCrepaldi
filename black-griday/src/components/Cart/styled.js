import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  margin: 0px 10px;
  align-items: center;

  h1 {
    width: 100%;
  }

  .product {
    width: 300px;
    min-height: 50px;
    border: 1px solid black;
    margin: 20px;
    padding: 20px;

    li {
      font-size: 20px;
      text-align: left;
    }
  }
`;
