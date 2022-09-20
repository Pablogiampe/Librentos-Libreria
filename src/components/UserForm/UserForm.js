import React, {useState} from 'react'
import db from '../../firebase/config';
import {collection, addDoc, Timestamp} from "firebase/firestore";
import { Navigate,useNavigate } from 'react-router-dom';

function UserForm({cart}) {

    const total = []
    cart.forEach(function (arrayItem) {
        var x = arrayItem.price * arrayItem.click;
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
      <div class="mb-3 mx-5">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input class="form-control"  value={userData.name}
                  onChange={inputChangeHandler}
             name="name"
           type="text"
           
               required/>
      </div>
      <div class="mb-3 mx-5">
        <label for="exampleInputPassword1" class="form-label">telefono</label>
        <input class="form-control" value={userData.telefono}
    onChange={inputChangeHandler}
    name="telefono"
    type="text"

    required/>
      </div>
      <div class="mb-3 mx-5">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input class="form-control" value={userData.email}
    onChange={inputChangeHandler}
    name="email"
    type="text"
  
    required/>
      </div>
      <button type="submit" class="btn btn-warning mx-5" onTouch={handleSubmit}>Finalizar Compra</button>
      
    </form>
      );


}

 
export default UserForm