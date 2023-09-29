import mainImg from './images/illustration-sign-up-mobile.svg'
import './index.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <img src={mainImg}></img>
      </div>
      <div className='row'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ol>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ol>
      <div className='row'>
        <form className='subscribe-form'>
          <label className='emaillabel'>Email address</label>
          <input className='emailinput' type='text' placeholder='email@company.com'></input>
          <button className='submit' type='submit'>Subscribe to monthly newsletter</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
