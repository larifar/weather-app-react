import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  const handleSearch = (local)=>{
    console.log("local recebido: ", local)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <SearchBar onClickSubmit={handleSearch}></SearchBar>
      </main>
    </div>
  )
}

export default App
