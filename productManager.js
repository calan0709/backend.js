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

    if (productIndex === -1){//si productos es gual a -1 es error
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);//incluye el producto conel id

    if (productAdd){
        console.log ("El producto se agregó correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)//lo carga al array vacio
}
};

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('jarabe', 'expectorante', 220, 'sin imágen', 'fj434', 34 );
manejadorProductos.addProduct ('sensodyne', 'dientes sensibles', 300, 'sin imágen', 'ty2455', 88 );
manejadorProductos.addProduct ('te vick', 'descongestivo nasal', 55, 'sin imágen', 'po0690', 63 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);


console.log(manejadorProductos.getProducts());

