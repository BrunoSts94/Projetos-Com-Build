import { Link } from 'react-scroll'

import './style.css'
import { Button } from '../Buttons/ButtonDefault'

export function Header(){
    return(
        <header className='header'>
            <div className='container-sessoes'>
                <Link 
                to="inicio" 
                smooth={true} 
                duration={500} 
                offset={-60} 
                activeClass="ativo">
                    <div className='sessao-nome'>
                        <h2>Thai Estudio</h2>
                        <p>BEAUTY SALON</p>
                    </div>                            
                </Link>
                
                <nav>
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
                            offset={-60}
                            activeClass='active'
                            >
                                Galeria
                            </Link>
                        </li>

                        <li>Sobre</li>

                        <li>Contato</li>
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