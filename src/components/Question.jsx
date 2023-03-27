export function Question({ question, onAnswer }) {
  const handleClick = (answer) => {
    onAnswer(answer)
  }
  return (
    <div className="nes-container with-title is-centered">
      <h3 className="title">{question.text}</h3>
      <ul className="flex flex-col gap-2">
        {question.answers.map((answer) => (
          <li key={answer.text}>
            <button
              onClick={() => handleClick(answer)}
              className="nes-btn w-full"
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
