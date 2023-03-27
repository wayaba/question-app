import { useState } from 'react'
import confetti from 'canvas-confetti'

const REDEEM_GIFTS = [
  {
    title: 'Confetti',
    label: (
      <button className="nes-btn" onClick={() => confetti()}>
        Tirar confetti
      </button>
    ),
    isReedemed: false,
    price: 2
  },
  {
    title: 'LinkedIn',
    label: (
      <a href="https://www.linkedin.com/in/pablo-pedraza-8a02286/">
        Mira mi perfil en LinkedIn
      </a>
    ),
    isReedemed: false,
    price: 4
  },
  {
    title: 'Correo',
    label: <a href="mailto:pabloj.pedraza@gmail.com">Enviame un correo</a>,
    isReedemed: false,
    price: 6
  },
  {
    title: 'Whatsapp',
    label: <a href="https://wa.me/1149710000">Mandame un Whatsapp</a>,
    isReedemed: false,
    price: 7
  }
]

export function Finished({ score, onReedem }) {
  const [information, setInformation] = useState(REDEEM_GIFTS)

  const handleClick = (redeemed) => {
    setInformation((information) =>
      information.map((info) => {
        if (info.title === redeemed.title) return { ...info, isReedemed: true }

        return info
      })
    )
    onReedem(redeemed)
  }
  return (
    <div className="nes-container with-title is-centered">
      <h1 className="title">Terminó!</h1>
      <p>Tu puntaje es: {score}</p>
      <h3>Cambia tus puntos</h3>
      <br />
      <ul className="flex flex-col gap-2">
        {information.map((info) => (
          <li key={info.title}>
            {info.isReedemed ? (
              info.label
            ) : (
              <button
                className="nes-btn w-full disabled:opacity-70"
                disabled={info.price > score}
                onClick={() => handleClick(info)}
              >
                {info.title} - {info.price} puntos
              </button>
            )}
          </li>
        ))}
      </ul>
      <br />
      <button className="nes-btn" onClick={() => window.location.reload()}>
        Jugar de Nuevo
      </button>
    </div>
  )
}
