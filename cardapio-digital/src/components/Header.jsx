import React from 'react'
import imgRestaurante from '../assets/fundo.jpg'

const Header = () => {
    return (
        <div className="header">
        <h1>Cardápio Miragem Gourmet</h1>
        <img src={imgRestaurante} alt="banner-do-restaurante" />
      </div>
    )
}

export default Header