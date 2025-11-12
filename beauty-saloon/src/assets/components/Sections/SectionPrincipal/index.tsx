import './style.css'
import './styleMobile.css'
import { Button } from '../../Buttons/ButtonDefault'

export function SectionPrincipal(){
    return(
        <section className='container-principal'>
            <div className='container-infos'>
                <h1>Thai Estudio</h1>
                <h2>Onde a beleza encontra a precisão</h2>
                <p>Experimente tratamentos de beleza de luxo com nossos serviços avançados de alisamento a laser para cabelo e design de sobrancelhas de precisão. Onde a elegância encontra a expertise.</p>
                <div className='container-buttons'>
                    <Button titulo='Agende um Horário' className='btn-personalizado'/>
                    <Button titulo='Veja a Galeria' className='btn-personalizado'/>
                </div>
            </div>
        </section>
    )
}