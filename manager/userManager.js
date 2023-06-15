import fs from 'fs';


const path = './files/productos.json'

export default class userManager{
    constructor(path){
        this.path = path;
    }


getUsers = async () =>{
    try{
        if ( fs.existsSync(path)){
            const dato = await fs.promises.readFile(this.path, 'utf-8')
           console.log(dato)
            const products = json.parse(dato)
            return products;
        } else {
            return [];
        }

    }
    catch(error){
        console.log(error);

    }
}

createUser = async (productos) => {
    try {
const products = await this.getUsers()
if (products.length === 0){
    productos.id = 1
}         
 else{
    productos.id = products[products.length -1].id +1
}
    products.push(productos)
    await fs.promises.writeFile(this.path,json.stringify(products, null, '\t'))
    return productos
    }
    catch (error){
        console.error(error)
    }
}
}