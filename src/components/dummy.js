import styled from "@emotion/styled";

const KontenAksiDummy = styled.div`
  margin: 60px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  padding: 20px;
  max-width: 100%;
  background-color: blue;
`;

const ButtonAksiDummy = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: #ffffff;
`;

export { KontenAksiDummy, ButtonAksiDummy };
