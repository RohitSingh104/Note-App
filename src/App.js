import Header from './components/header';
import SideMenu from './components/sideMenu';
import HeaderMenu from './components/headerMenu';
import ItemList from './components/itemList';
import './App.css';

function App() {
  
  return (
    <div className="App">
        <div className="mainWrapper">
            <div className="side-menu">
                <SideMenu />
            </div>
            <div className="container">
                <Header />
                <HeaderMenu />
                <ItemList />
            </div>
        </div>
    </div>
  );
}

export default App;
