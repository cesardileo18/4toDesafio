backend project 
### Entrega Clase 8:
- CartManager (constructor → this.path): getCarts, saveCarts, generateCartId, createCart, getCartById, addProductToCart.
- Ruta '/products':
    + POST '/': Agrega un producto pasado por body.
    + PUT '/:pid': Actualiza el producto pasado por params.
    + DELETE ':pid': Borra el producto pasado por params.
- Ruta 'carts':
    + POST '/': Crea un carrito
    + GET '/:cid': Busca el carrito pasado por params
    + POST '/:cid/product/:pid': 'Agrega el producto (pid) al carrito (cid), ambos pasados por params.