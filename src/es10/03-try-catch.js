try {
  fnAwait()
} catch (error) {
  console.error(error)
}

try {
  fnHello()
} catch {
  console.error('ocurrio un error, fnHello undefined')
}