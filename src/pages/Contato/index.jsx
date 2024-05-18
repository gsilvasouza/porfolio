import styles from "./Contato.module.css";
import { GoMail } from "react-icons/go";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Contato() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>

      <div className={styles.icones}>
        <a
          href="mailto:gsilvasouza2000@gmail.com"
          target="_blank"
          rel="noopener noreferer"
        >
          <GoMail className={styles.icone} />
        </a>
        <a
          href="https://github.com/gsilvasouza"
          target="_blank"
          rel="noopener noreferer"
        >
          <BsGithub className={styles.icone} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-silva-180a80170/"
          target="_blank"
          rel="noopener noreferer"
        >
          <BsLinkedin className={styles.icone} />
        </a>
      </div>
    </section>
  );
}

export default Contato;
