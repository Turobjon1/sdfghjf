
// import logo from './logo.svg';
import './App.css';
import rasm from  './img/logo (2).png'
import rasm2 from  './img/hero-bg (2).png'
import rasm3 from  './img/Group 13 (1).png'

function App() {
  return (
    <div>

    <header className='container' > 
    <div className='header' >
    <div className='div'>

     <img src={rasm} alt="" />
     <ul>
      <li className='bg' >Features</li>
      <li className='bg' >Pricing</li>
      <li className='bg' >Resources</li>
     </ul>
    </div>
     <button className=''>sign in</button>
    </div>
    

    
 
    </header>
    <main className='container'>
       <section className='sectionOne'>
        <div>
          <h1>More than just <br /> shorter links</h1>
          <button>Get Started</button>
        </div>
        <img src={rasm2} alt="" />
       </section>
       <section className='sectionTwo' >
        <div className='sectionThree'>
            <h2>Boost your links today</h2>
            <button>Get Started</button>
        </div>
       </section>
    </main>
    <footer className='container'>
    
    <div className='footer' >
    <div className='div'>

     <img src={rasm} alt="" />
     <ul>
      <li className='bg' >Features</li>
      <li className='bg' >Pricing</li>
      
     </ul>
    </div>
     <img src={rasm3} alt="" />
    </div>
    

    
 
    
    </footer>
    </div>
    
  );
}

export default App;
