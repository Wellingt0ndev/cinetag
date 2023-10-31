import logo from "./Logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";
const { Link } = require("react-router-dom");

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url='./Favoritos'>
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
