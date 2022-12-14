
import '../../App.css'
import CartWidget from '../Cart/CartWidget';
import {NavLink} from "react-router-dom";






function Navbar(){
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder text-light" to="/">inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bolder text-light" to="/category">categorias</NavLink>
            </li>
            <li className="nav-item">
            
              <NavLink className="nav-link fw-bolder text-light" to="/cart"><CartWidget/></NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
      );
    }

export default Navbar;



//     return(
//         <div className="parent">
            
//             <Link to="/"><img src={img}  className="logo" alt="40"></img></Link>
//             <p>CeluMarket</p>
//             <NavLink to={`/`} className='botones-navbar'><li>Inicio</li></NavLink>
//              <CartWidget/>
             
            
//         </div>
//    ) 
// }
