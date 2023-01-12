import Content from "./components/content/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer"
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
    <section className="todoapp">
      <Header/>
      <Content/>
    </section>
    <Footer/>
    </TodoProvider>
  );
}

export default App;
