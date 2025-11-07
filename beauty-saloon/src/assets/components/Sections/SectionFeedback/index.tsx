import './style.css'
import { useState } from 'react'
import { CardFeedback } from '../../Cards/CardFeedback'

const feedbacks = [
    { text: ' "Perfeito em cada detalhe!" ', name: 'Ana Costa', service: 'Alisamento a Laser' },
    { text: ' "Atendimento impecável e resultado incrível!" ', name: 'Luiza Ramos', service: 'Design de sobrancelhas' },
    { text: ' "Saí do salão me sentindo renovada!" ', name: 'Carla Menezes', service: 'Corte de Cabelo' },
    { text: ' "Experiencia incrível!" ', name: 'Ana Menezes', service: 'Alisamento a Laser' },
]

export function SectionFeedback(){

    const [feedback, setFeedback] = useState(0)

    return(
        <section className='container-section-feedback'>
            <div className='container-feedback-texts'>
                <h2>O que nossas clientes dizem</h2>
                <p>Veja o que nossas clientes satisfeitas têm a dizer sobre suas experiências transformadoras.</p>
            </div>
                
            <div className='container-feedback-card'>
                <CardFeedback 
                text={feedbacks[feedback].text}
                name={feedbacks[feedback].name}
                service={feedbacks[feedback].service}/>

                <div className="dots">
                    {feedbacks.map((_, i) => (
                        <span
                        key={i}
                        className={`dot ${i === feedback ? 'active' : ''}`}
                        onClick={() => setFeedback(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    )
}