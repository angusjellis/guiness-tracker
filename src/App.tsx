import { useState, useEffect } from 'react'
import Map from './components/Map'
import { PubData } from './types/pub'
import pubsData from './data/pubs.json'
import './App.css'

function App() {
  const [data, setData] = useState<PubData>({ pubs: [] })

  useEffect(() => {
    // In the future, this will be replaced with an API call
    setData(pubsData as PubData)
  }, [])

  return (
    <div className="app">
      <header>
        <h1>Guinness Price Tracker</h1>
        <p>Find the best Guinness prices in pubs across the UK</p>
      </header>
      <main>
        <Map pubs={data.pubs} />
      </main>
      <footer>
        <p>Prices last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}

export default App
