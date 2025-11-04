import logo from '../../assets/letreiro.png'
import styles from './style.module.css'
import restart from '../../assets/update.svg'

type Props = {
    current: number,
    max: number,
    onRestart: () => void
}

export function Header({current, max, onRestart}: Props){
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo}/>
            <header>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>

                <button onClick={onRestart}>
                    <img src={restart} alt="icone de reiniciar" />
                </button>
            </header>
        </div>
    )
}