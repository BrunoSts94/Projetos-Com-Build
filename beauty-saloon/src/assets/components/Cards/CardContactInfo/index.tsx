import './style.css'

type ContactCardProps = {
    tittle: string
    description: string
    imgInfo: string
}

export function CardContactInfo({ tittle, description, imgInfo }: ContactCardProps) {
    return (
        <div className='section-card-contact'>
            <img src={imgInfo} alt="" />
            <div>
                <h4>{tittle}</h4>
                <p>{ description }</p>
            </div>
        </div>
    )
}