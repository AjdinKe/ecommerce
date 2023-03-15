import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Ecommerce | About</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="text">
            {" "}
            <p className="heading">About Us</p> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sint soluta quisquam, tenetur eius culpa similique obcaecati
            voluptatibus maiores alias, quo quae, molestias sapiente possimus
            nulla officia nemo minima consequuntur officiis cupiditate
            necessitatibus amet ea porro. Quasi nisi dicta aliquam rerum facere
            possimus molestiae consequuntur.
          </div>
          <div className="img">
            <Image src="/logo.png" width={264} height={172} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="text" style={{ ["textAlign" as any]: "right" }}>
            {" "}
            <p className="heading">Products</p> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sint soluta quisquam, tenetur eius culpa similique obcaecati
            voluptatibus maiores alias, quo quae, molestias sapiente possimus
            nulla officia nemo minima consequuntur officiis cupiditate
            necessitatibus amet ea porro. Quasi nisi dicta aliquam rerum facere
            possimus molestiae consequuntur.
          </div>
          <div className="imga" style={{ ["marginLeft" as any]: "auto" }}>
            <Image src="/logo.png" width={264} height={172} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="text">
            {" "}
            <p className="heading">Requirements</p> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto repudiandae beatae minima excepturi, quam at
            ab sint dicta, doloremque, qui soluta nulla? Vitae nihil error
            consectetur illum nemo odit labore ipsam sapiente adipisci nam! Error
            incidunt itaque dolore, rem repudiandae sed? Perspiciatis, inventore
            quos.
          </div>
          <div className="img">
            <Image src="/logo.png" width={264} height={172} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
