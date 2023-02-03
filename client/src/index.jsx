import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import AddBouquet from './components/AddBouquet.jsx'
import Home from './components/Home.jsx'
import BouquetDetail from './components/BouquetDetail.jsx'
import About from './components/About.jsx'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, []);
  const addBouquet = (bouquet) => {
    console.log(bouquet);
    axios
    .post('/api/items',bouquet)
    .then(response => {
      setItems([...items, data]);
    })
    .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBouquet addBouquet={addBouquet}/>} exact />
          <Route path="/list" element={<List items={items}/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/books/:id" element={<BouquetDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  )
}

ReactDOM.render(
<BrowserRouter>
<React.StrictMode>
<App />,
</React.StrictMode>,
</BrowserRouter>,
 document.getElementById('app')
 );
