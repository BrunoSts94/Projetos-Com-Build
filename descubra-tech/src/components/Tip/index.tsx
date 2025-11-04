import style from './style.module.css'
import lamp from '../../assets/tip.svg'

type Props = {
    tip: string
}

export function Tip({ tip }: Props){

    return (
        <div className={style.container}>
            <img src={lamp} alt="lampada" className={style.icon}/>
            <div>
                <h3>Dica</h3>
                <p>{tip}</p>
            </div>
        </div>
    )
}