import './Store.css';

export default function Store() {
  // Placeholder: Implement API integration for fetching products
  const products = []; // Set to an empty array to simulate no products

  return (
    <div className="store-container">
      <h1>Produse</h1>
      {products.length === 0 ? (
        <p className="no-products-message">Momentan nu sunt produse disponibile.</p>
      ) : (
        <ul className="items-list">
          {products.map((product) => (
            <li key={product.id} className="items">
              <img src={product.imageUrl} alt={product.name} />
              <div className="item-details">
                <p className="item-name">{product.name}</p>
                <p className="item-price">{product.price} lei</p>
                <button className="buy-item">Cumpara</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}






