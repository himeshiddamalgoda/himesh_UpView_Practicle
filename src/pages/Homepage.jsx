import { useState, useEffect } from "react";
// import { BiSearch } from "react-icons/bi";
import { Link,  } from "react-router-dom";
// import { Rating } from "react-simple-star-rating";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.ecommerce.products);
        console.log(products);
        console.log(data);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <div className="grid grid-cols-1">
      <div>
        <h1 className="font-bold mt-32 px-12 text-4xl">Best Sellers </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-10 py-10 mx-auto gap-5 mt-6">
        {products?.map((product, index) => (
          <Link to={`/${product.id}`} key={index}>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <img
                className="rounded-t-lg h-72 w-72 mx-auto justify-center items-center"
                src={product.image}
                alt=""
              />

              <div class="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {product.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
                {/* <div className="flex"><Rating  initialValue={product.rating} /></div> */}
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 border  bg-transparent rounded-full hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
