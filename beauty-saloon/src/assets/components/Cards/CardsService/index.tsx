import './style.css'

type Props = {
    serviceTittle: string
    subtittle: string
    description: string
    price: string
    imgService1: string
} 

export function CardService({ serviceTittle, subtittle, description, price, imgService1}: Props){
    return (
        <div className='container-card-service'>
            <div className='container-img'>
                <figure className='service-thumb'>
                    <img src={imgService1} alt='imagem-do-servico'/>
                </figure>
            </div>
            
            <div >
                <div className='container-infos-services'>
                    <h3>{serviceTittle}</h3>
                    <span>{subtittle}</span>
                    <p>{description}</p>
                </div>
                <div className='container-price'>
                    <div></div>
                    <h3>{price}</h3>
                </div>
                
            </div>

        </div>
    )
}