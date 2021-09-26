import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Banner from './Componants/Bannder/Banner';
import DevelopersArea from './Componants/DevelopersArea/DevelopersArea';
import Header from './Componants/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <DevelopersArea></DevelopersArea>
    </div>
  );
}

export default App;
