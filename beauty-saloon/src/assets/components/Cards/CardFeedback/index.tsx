import './style.css'

type FeedbackProps = {
  text: string
  name: string
  service: string
  className?: string
}

export function CardFeedback({ text, name, service, className }: FeedbackProps){
    return(
        <div className={`container-card-feedback-infos ${ className ?? ''}`}>
            <p>{text}</p>
            <h4>{name}</h4>
            <span>{service}</span>
        </div>
    )
}