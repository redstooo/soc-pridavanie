import { Link } from 'react-router-dom';


function MainObrazovka(){

    return(
        <>
            <h1 className="title">Stránka na pridávanie chemikálií a reakcií</h1>
            <h2><Link to="/chemikalie-pridavanie" className='chemikalie box'> Chemikálie </Link></h2>
            <h2><Link to="/reakcie-pridavanie" className="box reakcie"> Reakcie </Link></h2>
        </>
    )
}

export default MainObrazovka