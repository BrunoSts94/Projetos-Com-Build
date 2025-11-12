import './style.css'
import './styleMobile.css'

import { CardService } from '../../Cards/CardsService'
import  ImgService  from '../../../img/service1.jpeg'

export function SectionServices(){
    return(
        <section className='container-services'>
            <div className='container-texts'>
                <h2>Nossos Serviços</h2>
                <p>Descubra nossos tratamentos premium, criados para realçar sua beleza natural com tecnologia de ponta e atendimento especializado.</p>
            </div>

            <div className='container-cards'>
                <CardService 
                className='card-mobile'
                serviceTittle='Alisamento a laser' 
                subtittle='Alisamento super moderno' 
                description='Alisamento a base de laser com raios uv' 
                price='R$ 150,00'
                imgService1={ImgService}/>
                
                <CardService 
                className='card-mobile'
                serviceTittle='Alisamento a laser' 
                subtittle='Alisamento super moderno' 
                description='Alisamento a base de laser com raios uv' 
                price='R$ 150,00'
                imgService1={ImgService}/>

                <CardService 
                className='card-mobile'
                serviceTittle='Alisamento a laser' 
                subtittle='Alisamento super moderno' 
                description='Alisamento a base de laser com raios uv' 
                price='R$ 150,00'
                imgService1={ImgService}/>
            </div>
        </section>
    )
}