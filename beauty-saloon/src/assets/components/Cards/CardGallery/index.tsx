import './style.css'


type CardGalleryProps = {
    beforeImg: string
    afterImg: string
}

export function CardGallery({ beforeImg, afterImg}: CardGalleryProps){
    return (
        <div className='container-cards-gallery'>
            <div className='card-before'>
                <img src={beforeImg} alt="imagem-antes" />
                <span>Antes</span>
            </div>

            <div className='card-after'>
                <img src={afterImg} alt="imagem-depois" />
                <span>Depois</span>
            </div>
        </div>
    )
}