import { useState } from 'react'
import { Finished } from './components/Finished'
import { Question } from './components/Question'
import questions from './questions'

function App() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const question = questions[index]
  const isFinished = index >= questions.length

  const onAnswerClick = (answer) => {
    if (answer.isCorrect) setScore((score) => score + 1)
    setIndex((index) => index + 1)
  }

  const onReedemClick = (redeemed) => {
    setScore((score) => score - redeemed.price)
  }
  return (
    <div className="min-h-screen grid place-content-center">
      <article className="flex flex-col text-center max-w-md w-full gap-6">
        {isFinished ? (
          <Finished score={score} onReedem={onReedemClick} />
        ) : (
          <Question question={question} onAnswer={onAnswerClick} />
        )}
      </article>
    </div>
  )
}

export default App
