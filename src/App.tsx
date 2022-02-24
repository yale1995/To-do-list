import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/index";
import { Main } from "./components/Main/index";
export function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
      <Footer />
    </>
  );
}
