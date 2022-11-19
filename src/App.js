import Cards from './components/Cards';
import Team from './components/Team';
import Search from './components/Search';
import { AddToTeamProvider } from './context/addToTeamContext';
import Resetbtton from './components/Resetbttn';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <AddToTeamProvider>
        <Team/>
        <Resetbtton/>
        <Filter/>
        <Search/>
        <Cards/>
      </AddToTeamProvider>
    </div>
  );
}

export default App;