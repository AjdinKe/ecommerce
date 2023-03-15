import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <>
        <Head>
            <title>Ecommerce | Error</title>
        </Head>
            <div className="not-found">
                <h1>Error</h1>
                <h2>This page could not be found</h2>
                <p>Go back to the <Link href='/'><span className="link">Homepage</span></Link> </p>
            </div>
        </>
     );
}
 
export default NotFound;