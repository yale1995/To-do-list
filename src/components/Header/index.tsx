import { useState } from "react";
import { Container, Content } from "./style";

export function Header() {
  const [BGColor, setBGColor] = useState(true);
  return (
    <Container className={BGColor ? "" : "black"}>
      <Content>
        <img src="./logo.svg" alt="to.do"></img>
        <button type="button" onClick={() => setBGColor(!BGColor)}>
          Change BG
        </button>
      </Content>
    </Container>
  );
}
