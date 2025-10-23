export const sendContact = (payload) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Mock API recibió:', payload)
      Math.random() > 0.1 ? resolve({ ok: true }) : reject(new Error('Fail'))
    }, 800)
  })
