
import './App.css';
import Header from "./Header"
import Content from './Content';
import Footer from './Footer';

function App() {

  return (
    
    <div className="App">
    <Header/>
    <Content/>
    <Footer length={9}/>
    </div>
  );
}

export default App;
