import React from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = [
      { id: 1, name: 'Product 1', category: 'Conjuntos' },
      { id: 2, name: 'Product 2', category: 'Conjuntos' },
      { id: 3, name: 'Product 3', category: 'Conjuntos' },
      { id: 4, name: 'Product 4', category: 'Pantalones' },
      { id: 5, name: 'Product 5', category: 'Pantalones' },
      { id: 6, name: 'Product 6', category: 'Pantalones' },
      { id: 7, name: 'Product 7', category: 'Remeras' },
      { id: 8, name: 'Product 8', category: 'Remeras' },
      { id: 9, name: 'Product 9', category: 'Remeras' }
    ];
    const filteredProducts = productsData.filter(product => product.category === id);
    setProducts(filteredProducts);
}, [id]);

return (
  <div>
      <h2>Products - Category ID: {id}</h2>
      <div className="product-list">
          {products.map(product => (
              <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <p>Category: {product.category}</p>
              </div>
          ))}
      </div>
  </div>
);
}
export default ItemListContainer;
