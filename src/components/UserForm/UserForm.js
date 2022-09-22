import React, {useState} from 'react'
import db from '../../firebase/config';
import {collection, addDoc, Timestamp} from "firebase/firestore";
import { Navigate,useNavigate } from 'react-router-dom';

function UserForm({cart}) {

    const total = []
    cart.forEach(function (arrayItem) {
        let x = arrayItem.price * arrayItem.click;
        total.push(x);
    });
    const totalFinal = total.reduce((acumulador, b) => acumulador + b, 0)

const[orderId, setOrderId]= useState(false)
let Navigation = useNavigate()
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        telefono:"",
        date: new Date()
    })

    const orden = {
        buyer: {...userData},
        items: [...cart],
        total: totalFinal, 

    }

    function inputChangeHandler(evt) {
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };
        copyUserData[inputName] = value;
        setUserData(copyUserData);

      }

      function handleReset(evt) {
        setUserData({
          name: "",
          email: "",
          telefono: "",
        });
      }

      async function handleSubmit(evt) {
        evt.preventDefault();    
  

        const ordersCollection = collection(db, "ordenes")
        const docRef= await addDoc(ordersCollection,orden)
    console.log(docRef)

    setOrderId(docRef.id)
    Navigation('/Gracias')
        }
if(orderId){
  return(
  <div>
    <h1>Gracias por comprar con nosotros.</h1>
  </div>).then(handleReset)
}
    return (
    <form  onReset={handleReset} onSubmit={handleSubmit}>
      <div className="mb-3 mx-5">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
        <input className="form-control"  value={userData.name}
                  onChange={inputChangeHandler}
             name="name"
           type="text"
           
               required/>
      </div>
      <div className="mb-3 mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label">telefono</label>
        <input className="form-control" value={userData.telefono}
    onChange={inputChangeHandler}
    name="telefono"
    type="text"

    required/>
      </div>
      <div className="mb-3 mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
        <input className="form-control" value={userData.email}
    onChange={inputChangeHandler}
    name="email"
    type="text"
  
    required/>
      </div>
      <button type="submit" className="btn btn-warning mx-5" onChange={handleSubmit}>Finalizar Compra</button>
      
    </form>
      );


}

 
export default UserForm