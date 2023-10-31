import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="1"
          titulo="Gato bonifácio"
          capa="https://thecatapi.com/api/images/get?format=src&type=png"
        />
      </section>
    </>
  );
}

export default Favoritos;
