const questions = [
  {
    text: '¿Cómo se llama el mejor amigo de Bart Simpson?',
    answers: [
      { text: 'Nelson Muntz', isCorrect: false },
      { text: 'Milhouse Van Houten', isCorrect: true },
      { text: 'Ralph Wiggum', isCorrect: false },
      { text: 'Martin Prince', isCorrect: false }
    ]
  },
  {
    text: '¿Cuál es el nombre completo de la esposa de Homer Simpson?',
    answers: [
      { text: 'Marge Bouvier Simpson', isCorrect: true },
      { text: 'Simpson', isCorrect: false },
      { text: 'Marjorie Simpson', isCorrec: false },
      { text: 'Margaret Simpson', isCorrect: false }
    ]
  },
  {
    text: '¿Cómo se llama el bar de Moe Szyslak?',
    answers: [
      { text: 'Bar de Moe', isCorrect: false },
      { text: 'Bar de la Taberna de Moe', isCorrect: false },
      { text: 'La Taberna de Moe', isCorrect: true },
      { text: 'El Bar de Moe Szyslak', isCorrect: false }
    ]
  },
  {
    text: '¿Quién es el hermano de Homero Simpson?',
    answers: [
      { text: 'Herb Powell', isCorrect: true },
      { text: 'Barney Gumble', isCorrect: false },
      { text: 'Ned Flanders', isCorrect: false },
      { text: 'Sideshow Bob', isCorrect: false }
    ]
  },
  {
    text: '¿Cuál es el apellido de los vecinos de los Simpson?',
    answers: [
      { text: 'Flanders', isCorrect: true },
      { text: 'Houten', isCorrect: false },
      { text: 'Wiggum', isCorrect: false },
      { text: 'Hibbert', isCorrect: false }
    ]
  },
  {
    text: '¿Qué trabajo tiene el personaje de Apu Nahasapeemapetilon?',
    answers: [
      { text: 'Dueño de la tienda de conveniencia', isCorrect: true },
      { text: 'Policía', isCorrect: false },
      { text: 'Doctor', isCorrect: false },
      { text: 'Abogado', isCorrect: false }
    ]
  },
  {
    text: '¿Cómo se llama el gato de los Simpson?',
    answers: [
      { text: 'Gato', isCorrect: false },
      { text: 'Snowball', isCorrect: true },
      { text: 'Fluffy', isCorrect: false },
      { text: 'Tom', isCorrect: false }
    ]
  },
  {
    text: '¿Cuál es el nombre de la escuela donde van Bart y Lisa?',
    answers: [
      { text: 'Escuela de Springfield', isCorrect: false },
      { text: 'Escuela Primaria de Springfield', isCorrect: true },
      { text: 'Escuela de la Ciudad', isCorrect: false },
      { text: 'Escuela de los Simpsons', isCorrect: false }
    ]
  },
  {
    text: '¿Qué instrumento toca Lisa Simpson?',
    answers: [
      { text: 'Saxofón', isCorrect: true },
      { text: 'Piano', isCorrect: false },
      { text: 'Guitarra', isCorrect: false },
      { text: 'Batería', isCorrect: false }
    ]
  },
  {
    text: '¿Cuál es el trabajo de Montgomery Burns en la planta nuclear de Springfield?',
    answers: [
      { text: 'Dueño', isCorrect: true },
      { text: 'Gerente', isCorrect: false },
      { text: 'Trabajador', isCorrect: false },
      { text: 'Inspector', isCorrect: false }
    ]
  }
]

export default questions.sort(() => Math.random() - 0.5)
