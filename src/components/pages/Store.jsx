import './Store.css'

export default function Store() {
  // GOT TO IMPLEMENT API FOR THIS 


  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("url")
  //       const data = await response.json()
  //       setProducts(data)
  //     } catch (error) {
  //       console.error("Error:....", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const products = [
    { id: 1, name: 'Stuff 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Stuff 2', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Stuff 3', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Stuff 4', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Stuff 5', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Stuff 6', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Stuff 7', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Stuff 8', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Stuff 9', price: 123, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Stuff 10', price: 124, imageUrl: 'https://via.placeholder.com/150' }
  ]


  return (
    <div className="store-container">
      <h1>Produse</h1>
      <ul className="items-list">
        {products.map((product) => (
          <li key={product.id} className="items">
            <img src={product.imageUrl} alt={product.name} />
            <div className="item-details">
              <p className="item-name">{product.name}</p>
              <p className="item-price">{product.price} lei</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}





