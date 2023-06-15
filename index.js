import userManager from "./manager/userManager";
const manager = new userManager ('./file/productos.json')

const env = async () =>{
    const productos = await manager.getUsers()
    console.log(productos)

    const user = {
        producto: '',
        marca: '',
        detalles: '',
        costo: ''
    }
    await manager.createUser(user)
    const usersResult = await manager.getUsers()
    console.log(usersResult)
}
env()