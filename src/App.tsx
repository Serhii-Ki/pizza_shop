import './App.css'
import Header from "./components/header/Header.tsx";
import FilterPanel from "./components/filterPanel/FilterPanel.tsx";
import AllCards from "./components/allCards/AllCards.tsx";

function App() {
  return (
    <div className='container'>
      <Header/>
      <h1 className='title'>My pizzeria</h1>
      <FilterPanel/>
      <AllCards/>
    </div>
  )
}

export default App
