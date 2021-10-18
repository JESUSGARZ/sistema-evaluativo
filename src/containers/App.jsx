import React,{ useState} from 'react';
import Questions from '../components/Questions';
import Ciencias from '../components/Ciencias'
import '../styles/styles.css';



const App = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true);
    }
    if(show === false){
        return (
            <div>
                <main >
                    <Questions/>
                    <div className="next__container">
                        <button className="next__button" onClick={() => handleShow()}> 
                        Siguiente Examen
                        </button>
                    </div>
                    
                </main>  
            </div>
        )

    } else {
        return(
            <div>
                <main>
                    <Ciencias/>
                </main>
            </div>
        )

    }
  
}

export default App
