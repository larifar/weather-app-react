import './App.css'
import CityCard from './components/CityCard'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  const data = {name:"Berlin, Germany", temp: 20, isDay: true, unit:"°C"}

  const handleSearch = (local)=>{
    console.log("local recebido: ", local)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <SearchBar onClickSubmit={handleSearch}></SearchBar>
        <CityCard data={data}></CityCard>
      </main>
    </div>
  )
}

export default App
