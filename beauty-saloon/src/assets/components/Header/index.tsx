import { Link } from 'react-scroll'
import menu  from '../../img/menu-icon.svg'
import { useState } from 'react'

import './style.css'
import './styleMobile.css'
import { Button } from '../Buttons/ButtonDefault'

export function Header(){
    const [menuOpen, setMenuOpen] = useState(false) 

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    return(
        <header className='container-header'>
            <div className='container-sessoes'>
                <Link 
                to="inicio" 
                smooth={true} 
                duration={500} 
                offset={-60} 
                activeClass="ativo">
                    <div className='sessao-nome-header'>
                        <h2>Thai Estudio</h2>
                        <p>BEAUTY SALON</p>
                    </div>                            
                </Link>
                <img src={menu} className='menu' onClick={toggleMenu}/>
                
                <nav className={`menu-mobile ${menuOpen ? 'ativo' : ''}`}>
                    <ul className='lista-opcoes'>
                        <li>
                            <Link
                                to="services"      
                                smooth={true}
                                duration={500} 
                                spy={true}
                                offset={-60}
                                activeClass='active'
                            >
                                Serviços
                            </Link>
                            
                        </li>

                        <li>
                            <Link
                            to="gallery"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass='active'
                            >
                                Galeria
                            </Link>
                        </li>

                        <li>
                            <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass='active'
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass='active'
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='sessao-botao'>
                    <Button 
                    titulo='Agende seu Horario'/> 
                </div>
            </div>            
        </header>
    )
}