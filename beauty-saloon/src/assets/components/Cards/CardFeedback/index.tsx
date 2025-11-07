import './style.css'

type FeedbackProps = {
  text: string
  name: string
  service: string
}

export function CardFeedback({ text, name, service }: FeedbackProps){
    return(
        <div className='container-card-feedback-infos'>
            <p>{text}</p>
            <h4>{name}</h4>
            <span>{service}</span>
        </div>
    )
}