import userManager from "./manager/UserManager.js"
const manager = new userManager ('./file/productos.json')

const env = async () =>{
    const productos = await manager.getUsers()
    console.log(productos)

    const user = {
        producto: 'sensodyne',
        marca: 'trydel',
        detalles: 'dientes sensibles',
        costo: '300'
    }
    await manager.createUser(user)
    const usersResult = await manager.getUsers()
    console.log(usersResult)
}
env()