import "./styles.css"
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Container from "./Container";
import Footer from "./components/Footer";

const App = () => (
      <LangContextProvider>
      <ThemeContextProvider>
       <Container/>
      </ThemeContextProvider>
      </LangContextProvider>
  );
export default App;
