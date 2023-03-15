import styles from "../../styles/Products.module.css"
import style from "../../styles/Home.module.css"
import Link from "next/link";
import Head from "next/head"
import toast, { Toaster } from "react-hot-toast";


export const getStaticPaths = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
  
    const paths = data.map((product) => {
      return {
        params: { id: product.id.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(
      "https://fakestoreapi.com/products/" + id
    );
    const data = await response.json();
  
    return {
      props: { products: data },
    };
  };

const Details = ({ products }) => {
    return (
      <>
      <div><Toaster position="bottom-left" reverse-order="false"/></div>

        <Head>
          <title>{products.title}</title>
        </Head> 
          <div className={styles.content}>
             <img src={products.image} alt="Image" className={styles.image} />
              <div className={styles.info}>
                  <Link href={"/category/"+ products.category}><p className={ styles.category }>{ products.category }</p></Link>
                  <h2>{ products.title }</h2>
                  <p className={style.rating}>{ products.rating.rate } <img src="/star-icon.svg" alt="" width={20} height={20} /> ({products.rating.count}) </p>
                  <h1 className={styles.price}>${ products.price }</h1>
                  <p className={styles.desc} >{ products.description }</p>
                  <div className={styles.buttonContainer}>
                      <button className={styles.buttons} onClick={() => {toast.success("Item added to cart!")}}>Add to Cart</button>
                      <button className={styles.buttons}>Add to favorites</button>
                  </div>
              </div>
          </div>
        </>
    );
}
 
export default Details;