import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() { //앱 컴포넌트, 부모 컴포넌트(루트 컴포넌트)
  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App
