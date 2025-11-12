import './style.css'
import './styleMobile.css'

import { Button } from '../../Buttons/ButtonDefault'
import imgSup1 from '../../../img/img2.jpeg'
import imgSup2 from '../../../img/img3.jpg'
import imgInf1 from '../../../img/img4.jpg'
import imgInf2 from '../../../img/service1.jpeg'

export function SectionAbout(){
    return(
        <section className='section-about'>
            <div className='container-section-about'>
                <div className='container-section-about-texts'>
                    <h2>Sobre a Thai Estudio</h2>
                    <p>Com mais de uma década de experiência no setor de beleza, o Thai Estudio se tornou o principal destino para tratamentos de beleza avançados na cidade.</p>
                    <p>Nossa equipe de especialistas certificados utiliza tecnologia de ponta e técnicas comprovadas para oferecer resultados excepcionais. Acreditamos que todos os clientes merecem se sentir confiantes e belos, e estamos comprometidos em tornar essa visão realidade.</p>
                    <div className='section-about-aditional-infos'>
                        <div className='info-years'>
                            <h4>10+</h4>
                            <p>Anos de experiência</p>
                        </div>
                        <div className='info-clients'>
                            <h4>500+</h4>
                            <p>Clientes Satisfeitos</p>
                        </div>
                    </div>
                    <Button titulo='Contate-nos' className='btn-about-contact'/>
                </div>

                <div className='container-section-about-images'> 
                        <img src={ imgSup1 } className='img-about-sup'/>
                        <img src={ imgSup2 } className='img-about-sup img-hide-mobile'/>
                        <img src={ imgInf1 } className='img-about-inf img-hide-mobile'/>
                        <img src={ imgInf2 } className='img-about-inf img-hide-mobile'/>
                        
                </div>
            </div>
        </section>
    )
}