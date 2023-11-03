import styles from "./NaoEncontrado.module.css"

function NaoEncontrado(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>

    )
}

export default NaoEncontrado;