// import data from './data';

// function App() {
//   return (
//     <div>
//       <header>
//         <a href="/">pandora</a>
//       </header>

//       <main>
//         <h1>Featured Products</h1>
//         <div className="products">
//           {data.products.map((product) => (
//             <div className="product" key={product.slug}>
//               <img src={product.image} alt={product.name} />
//               <div className="product-info">
//                 <p>{product.name}</p>

//                 <p>{product.price}</p>
//                 <button>Add to cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Pandora</Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
