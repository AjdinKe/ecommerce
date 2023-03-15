import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css"

export const getStaticPaths = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  
    const paths = data.map((product) => {
      return {
        params: { category: product.category.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
export const getStaticProps = async (context) => {
    const category = context.params.category;
    console.log('asd')
    console.log(category)
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + category 
    );
    const data = await response.json();
  
    return {
      props: { products: data },
    };
  };


const ByCategory = ({ products }) => {
    console.log(products)
    return ( 
    <>
    {/* <button className={styles.filter}>Filter</button> */}
      <div className="card-container">
        {products.map((product) => (
          <>
            <Head>
              <title>Category | { product.category }</title>
            </Head>
            <div key={product.id} className="productcard">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
              </svg>     
            <Link href={"/shop/" + product.id}> <img src={product.image} alt="Product image" className="product-image" /> </Link>
              <p>{product.title}</p>
              <h3>${ product.price }</h3>
              <button>Add to Cart</button>
              <p className={styles.rating}>{ product.rating.rate } <img src="/star-icon.svg" alt="" width={20} height={20} /> ({product.rating.count}) </p>
            </div>
          </>
        ))}
      </div>
    </>
     );
}
 
export default ByCategory;