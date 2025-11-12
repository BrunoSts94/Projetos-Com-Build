import './style.css'


type CardGalleryProps = {
    beforeImg: string
    afterImg: string
    className?: string
}

export function CardGallery({ beforeImg, afterImg, className}: CardGalleryProps){
    return (
        <div className={`container-cards-gallery ${className ?? ''}`}>
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