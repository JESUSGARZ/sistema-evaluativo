import React, { useContext, useState} from 'react';
import '../styles/styles.css';
import {AppContext} from '../containers/Context'
 


const Questions = () => {
    const {preguntas} = useContext(AppContext);
    const [correct, setCorrect] = useState(1);
    const [incorrect, setIncorrect] = useState(1);
    

const handleCorrect = (id) => {

    if (id === "1c" || id === "2c" || id ==="3c" || id ==="4c" || id ==="5c" ) {
        setCorrect(correct+1) 
        document.getElementById("correct").value=correct;  
    } else {
        setIncorrect(incorrect+1)
        document.getElementById("incorrect").value=incorrect;
    }   
}  
    return(
        <section className= "preguntas">
            <div>
                <div className="header">
                    <div>
                        <label className="header__label"  htmlFor="correct">Respuestas Correctas</label>
                        <input className="header__input"  id="correct" type="text" readOnly="readonly" />
                    </div>
                    <div>
                        <label className="header__label" htmlFor="incorrect">Respuestas erradas</label>
                        <input className="header__input" id="incorrect" type="text" readOnly="readonly" />
                    </div>

                </div> 
                {        
                preguntas.map(({pregunta,opciones},index) => {
                    const disableBottons = () => {
                        opciones.map( (element) => {
                             document.getElementById(element.id).disabled=true 
                            
                        })    
                    }
                   
                const options = opciones.map((opciones)=>{
                    
                    return (
                        <div className="question__container"  key={opciones.id}>
                            <button className="question__button" key={opciones.id} id={opciones.id} onClick={ e => {disableBottons(), handleCorrect(opciones.id)} } >
                                {opciones.opcion}
                            </button>
                        </div>
                    ) 
                })
                        return (
                            <div  key={index}>
                                    <h2 className="question">{pregunta}</h2>
                                    {options}
                            </div>     
                        )
                })}      
            </div>
        </section>    
    );
}
export default Questions;

