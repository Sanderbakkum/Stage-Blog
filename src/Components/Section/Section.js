import "./Section.css";

import { Link } from 'react-router-dom';

const Section = () => {
    return(
        <section class="section">
           <div class="container">

                <div class="homepage__title">
                    <h1 class="title-stage">Stage Blog</h1>
                    <h3 class="naam-stage">Sander Bakkum</h3>
                </div>

                <div class="buttons">
                    <Link to="/Stagepage1">
                        <button class="button-30">Stage periode 1</button>
                    </Link>
                <Link to="/Stagepage2">
                    <button class="button-30">Stage periode 2</button>
                </Link>
                    
                </div>
                

           </div>
      
        </section>
        
    )
}


export default Section;