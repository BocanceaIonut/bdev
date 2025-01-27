import Link from "next/link";
import Image from "next/image";
import BDev from "../images/bdev.webp";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.liImage}>
            <Image src={BDev} alt="" width={40} height={40} />
          </li>
          <li style={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li style={styles.li}>
            <Link href="/about">About</Link>
          </li>
          <li style={styles.li}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  ul: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  li: {
    margin: "0 10px",
  },
  liImage: {
    margin: "0 10px",
    backgroundColor: "red",
    borderRadius: 19,
    overflow: "hidden",
  },
};

export default Header;
