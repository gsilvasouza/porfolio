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
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span>Gabriel Souza</span> <br />
            <strong>Desenvolvedor Full Stack</strong>{" "}
          </p>

          <p>Trabalho com desenvolvimento Web desde 2020.</p>

          <p>
            Eu sou Gabriel Silva, profissional da área de desenvolvimento de
            <br />
            sistema com 3 anos de experiências na área, com prestação de serviço
            <br />
            para as empresas: Banco BTG Pactual, Indra, Thomson Reuters Brasil e
            <br />
            Setfin onde atuei como lider tecnico do time de back-end, durante a
            <br />
            minha carreira possuo experiências relevantes com as tecnologias:
            <br />
            NestJs utilizando Typescript, Postgress, Google Cloud, Git/GitHub,
            <br />
            Flutter, C# ASP.NET CORE, Postgress. Possuo uma base sólida com a
            <br />
            faculdade de analise e desenvolvimento de sistema na FIAP, cursos
            <br />
            livres sobre NestJs, Java, C#, Flutter e Angular na instituições
            <br />
            FullCycle, Alura e Cod3r além de formação de liderança e comunicação
            <br />
            e orátoria pela instituição Conquer
            <br />
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="Ícone do html" />
          <img src={css} alt="Ícone do css" />
          <img src={js} alt="Ícone do js" />
          <img src={react} alt="Ícone do react" />
          <img src={node} alt="Ícone do node" />
          <img src={sql} alt="Ícone do sql" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
