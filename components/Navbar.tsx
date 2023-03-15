import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  if (router.pathname != "/auth") {
    return (
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={128} height={77} />
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/auth">Log Out</Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={128} height={77} />
        </div>
        <div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
