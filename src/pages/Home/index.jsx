import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Gabriel Souza</span> <br />
          Dev Full Stack
        </p>
        <Link className={`${styles.btn} ${styles.btn_red}`} to="/about">
          Saiba mais sobre mim
        </Link>
      </div>
      <img
        className={styles.img_home}
        src="/developer-red.svg"
        alt="Imagem de Home"
      />
    </section>
  );
}

export default Home;
