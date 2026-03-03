import './App.css'
import './css/bootstrap.min.css';
import Navbar from './components/navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <div className='container'>
          <div className='row align-items-start flex-column flex-md-row' style={{ marginTop: '30px' }}>
            <div className='col d-flex flex-column align-items-center'>
                <h1 className="text-center">Hello, Bootstrap with React!</h1>
                <button className="btn btn-primary mx-auto">Click Me</button>
            </div>
            <div className='col'>
                <h2 className="text-center">Another Column</h2>
                <p className="text-center">This is another column in the same row.</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
