export const consultarBDD =  async (ruta) => {
    const response = await fetch(ruta)
    const datos = response.json()
    return datos
}