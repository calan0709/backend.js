//arreglo vacio de productos
class ProductManager{
    constructor() {
        this.products = [];}

// retorna el arreglo de productos
getProducts = () => {
    return this.products;
}

addProduct = (title, description, price, thumbnail,code,stock) => {
    const product = {//parametros de productos
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    products: [] 
    }

    if (this.products.length === 0){//si la posicion de producto es 0 es igual a 1
        product.id = 1
    } else {
        product.id = this.products [this.products.length-1 ].id + 1 //buscar una posicion menos y le incrementa uno.
    }

    this.products.push(product)
}

 //Debe contar con el método getProductById, el cual recibe como parámetro el
//id del producto

getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct); 

    if (productIndex === -1){
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agregó correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('Regla', 'transparente', 80, 'sin imágen', 'ab154', 36 );
manejadorProductos.addProduct ('Lápiz', 'transparente', 100, 'sin imágen', 'ab155', 30 );
manejadorProductos.addProduct ('Birome', 'transparente', 200, 'sin imágen', 'ab156', 15 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);


console.log(manejadorProductos.getProducts());

