import { useEffect, useState } from 'react'
import { WORDS } from './utils/words'
import type { Challenge } from './utils/words'
import { LettersUsed } from './components/LettersUsed'
import type { LetterUsedProps } from './components/LettersUsed'

//css
import style from './app.module.css'

//components
import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState('')
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  const attemptMargin = 3
  
  function handlerRestartGame(){
    const isConfirmed = window.confirm('Voce tem certeza que deseja reiniciar?')
    if (isConfirmed) {
      startGame()
    }
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setScore(0)
    setLetter('')
    setLetterUsed([])
  }

  function handleConfirm(){
    if(!challenge) return

    if(!letter.trim()){
      return alert('Digite uma letra')
    }

    const value = letter.toUpperCase()
    const exists = letterUsed.find((used) => used.value.toUpperCase() === value)

    if(exists){
      return alert('Você já utilizou a letra ' + value)
    }

    const hints = challenge.word.toUpperCase().split('').filter((char) => char === value).length
    
    const correct = hints > 0
    const currentScore = score + hints
    
    setLetterUsed((prev) => [...prev, { value, correct }])
    setScore(currentScore)
    setLetter('')
  }

  function endgame(message: string){
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [])

   useEffect(() => {
    if (!challenge) {
      return
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endgame('Parabéns, você descobriu a palavra!')
      }

      const attemptLimit = challenge.word.length + attemptMargin

      if (letterUsed.length === attemptLimit) {
        return endgame('Que pena, não foi dessa vez!')
      }
    },200)
  }, [score, letterUsed.length])

  if(!challenge){
    return <></>
  }

  return (
    <div className={style.container}>
      <main>
        <Header 
        current={letterUsed.length} 
        max={challenge.word.length + attemptMargin} 
        onRestart={handlerRestartGame}/>

        <Tip tip={challenge.tip}/>

        <div className={style.letters}>
          {challenge.word.split('').map((letter, index) => {
            const usedLetter = letterUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            )

            return (
              <Letter
                key={index}
                value={usedLetter ? letter.toUpperCase() : ''}
                color={usedLetter?.correct ? 'correct' : 'default'}
              />
            )
          })}
        </div>

        <h4>Palpite</h4>

        <div className={style.guess}>
          <Input 
            autoFocus 
            maxLength={1} 
            placeholder='?' 
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />

          <Button title='Confirmar' onClick={handleConfirm}/>
        </div>

        <LettersUsed data={letterUsed}/>
      </main>
    </div>
  )
}

export default App
