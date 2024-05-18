import styles from "./Sobre.module.css";
import avatar from "./images/avatar.jpg";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import node from "./images/icon-node.svg";
import react from "./images/icon-react.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>
            Sou <span> Edson Maia </span> <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2000. Sou apaixonado por</p>
          <p>
            transformar ideias em realidade digital. Especializado em criação de
          </p>
          <p>
            aplicações dinâmicas e intuitivas,
            <br /> com foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="Íconde de html" />
          <img src={css} alt="Íconde de css" />
          <img src={js} alt="Íconde de js" />
          <img src={react} alt="Íconde de react" />
          <img src={node} alt="Íconde de node" />
          <img src={sql} alt="Íconde de sql" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
