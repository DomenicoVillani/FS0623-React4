import './App.css';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import AllMovie from './components/AllMovie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
      </header>
      <div>
        <MyHeader />
      </div>
      <main>
        <AllMovie />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
