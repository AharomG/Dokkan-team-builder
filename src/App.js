import Cards from './components/Cards';
import Team from './components/Team';
import Search from './components/Search';
import { AddToTeamProvider } from './context/addToTeamContext';
import Resetbtton from './components/Resetbttn';
import Filter from './components/Filter';
import Buffs from "./components/Buffs";
import ReturnToTop from "./components/ReturnToTop";

function App() {
  return (
    <div className="App">
      <AddToTeamProvider>
        <Team/>
        <Buffs/>
        <Resetbtton/>
        <Filter/>
        <Search/>
        <Cards/>
      </AddToTeamProvider>
      <ReturnToTop/>
    </div>
  );
}

export default App;