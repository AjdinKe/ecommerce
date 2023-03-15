import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css"
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import ReactDropdown from "react-dropdown";



export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: { products: data },
  };
};


const Shop = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [total, setTotal] = useState(0)
  const [cartIndicator, setCartIndicator] = useState(false)
  const [cart, setCart]: any = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCartIndicator(false);
  //     console.log("TIMEOUT")
  //   }, 3000);
  // }, []);

  
  const removeFromCart = (index: any) => {
    const newCart = cart.filter((_:any, i: any) => i !== index);
    setCart(newCart);
  };

  return (
    <>
    <div><Toaster position="bottom-left" reverse-order="false"/></div>

    {/* <button className={styles.filter}>Filter</button> */}
      <Head>
        <title>Ecommerce | Shop</title>
      </Head>

      {/* {cartIndicator == true ? (
        <div className="cart-modal">
                    Product added to cart!
                    <img src="exit-icon.svg" alt="" width={32} onClick={() => {
                      setCartIndicator(false)
                      console.log(products.id)
                    }} />
                  </div>
                ) : (
                  <div></div>
                )} */}

                <div className="dropdown">
                <p>Categories ▼</p> 
                  
                    <ul className="dropdown-list">
                      <li className="dropdown-item"> <Link href="/category/electronics" >Electronics</Link> </li>
                      <li className="dropdown-item"> <Link href="/category/jewelery" >Jewelry</Link> </li>
                      <li className="dropdown-item"> <Link href="/category/men's%20clothing" >Men's clothing</Link> </li>
                      <li className="dropdown-item"> <Link href="/category/women's%20clothing" >Women's clothing</Link> </li>
                    </ul>
                  
                </div>


      <div className="card-container">
        {products.map((product: any) => (
          <div key={product.id} className="productcard">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>     
          <Link href={"/shop/" + product.id}>  <img src={product.image} alt="Product image" className="product-image" /> </Link>
            <p>{product.title}</p>
            <h3>${ product.price }</h3>
            <button onClick={() => {
               setTotal(total + product.price);
               toast.success("Product added to cart!")
               if (cart.includes(product.image)) {
                 return;
               } else {
                setCart((prevCart:any) => [...prevCart, product.image])
                //  setCart([...cart, (product.image)]);
               }
               console.log(cart)
               }}>
                Add to Cart</button>
            <p className={styles.rating}>{ product.rating.rate } <img src="star-icon.svg" alt="" width={20} height={20} /> ({product.rating.count}) </p>          
          </div>
          
          ))}
          </div>

          <div className="cart">
            <img src="/cart-icon.svg" alt="" width={64} height={64} onClick={() => {
              document.getElementById('sidebar')?.classList.add('popup');
              document.getElementById('backdrop')?.classList.add('backdrop-enable');
              document.getElementById('sidebar')?.classList.remove('popback')}} />
          </div>
         
            <div className="sidebar" id="sidebar">
              
              <h2 className={styles.cartText}>Cart</h2>
              <div>
                <div className={styles.cartItems}>
                {
                  cart.map((carts: any, index: any) => (
                    <>
                        <img className={styles.cartItem} src={carts} alt="item" />
                        {/* <div className={styles.cartCounter}>
                            <button className={styles.cartCounterButton} onClick={() => {setCounter(counter - 1);}} >-</button>
                            <p>{ counter }</p>
                            <button className={styles.cartCounterButton} onClick={() => {setCounter(counter + 1);}} >+</button>
                        </div> */}
                        <div className="misc">
                          <input type="number" name="" id="num" defaultValue={1} min={0} onChange={() => {}} />
                          <img src="/delete-icon.png" alt="" width={16} height={16} title="Remove product" onClick={() => {
                            removeFromCart(index)
                            toast.success("Product removed from cart!", {
                              iconTheme: {
                                primary: 'lightcoral',
                                secondary: 'white'
                              }
                            })
                            console.log("asd")
                          }} />
                        </div>
                    </>
               
                ))
              }
              </div>
              </div>
            </div>
          
          

          <div className="backdrop" id="backdrop" onClick={() => {
            document.getElementById('sidebar')?.classList.remove('popup');
            document.getElementById('backdrop')?.classList.remove('backdrop-enable');
            document.getElementById('sidebar')?.classList.add('popback')}}>
          </div>   
      
    </>
  );
};

export default Shop;
