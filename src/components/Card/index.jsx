import styles from "./Card.module.css";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Titulo do projeto</h3>
      <p>Texto descritivo</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <button className={styles.card_botao}>
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Card;
