export const message = (msj) => {
    setMensaje(msj)
    setTimeout(() => {
        setMensaje("")
        }, 6000)
}
