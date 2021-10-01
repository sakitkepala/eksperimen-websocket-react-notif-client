import * as React from "react";
import styled from "@emotion/styled";

function KontenAksiDummy() {
  return (
    <Container>
      <ButtonAksiDummy onClick={() => alert("1")}>Aksi</ButtonAksiDummy>
      <ButtonAksiDummy onClick={() => alert("2")}>Aksi</ButtonAksiDummy>
    </Container>
  );
}

const Container = styled.div`
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

export { KontenAksiDummy };
