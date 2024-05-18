import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Gabriel Souza</span> <br />
            Dev Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <img 
          className="img-home" 
          src="/developer-red.svg" 
          alt="Imagem de Home"
        />
        
      </section>
      <Footer />
    </>
  )
}

export default App
