import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            Olá, sou <br />
            <span>Gabriel Souza</span> <br />
            Dev Full Stack
          </p>
          <Link className="btn btn-red" to="/about">
            Saiba mais sobre mim
          </Link>
        </div>
        <img
          className="img-home"
          src="/developer-red.svg"
          alt="Imagem de Home"
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
