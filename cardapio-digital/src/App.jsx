import React, { useState } from 'react'
import './App.css'
import Categorias from './components/Categorias'
import ContainerCards from './components/ContainerCards'
import Header from './components/Header.jsx'

function App(){
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0)
  return (
    <div className="container">
      <Header/>
      <Categorias 
      numCategoriaSelecionada={numCategoriaSelecionada} 
      setNumCategoriaSelecionada={setNumCategoriaSelecionada}/>

      <ContainerCards
      numCategoriaSelecionada={numCategoriaSelecionada}/>
    </div>
  )
}

export default App