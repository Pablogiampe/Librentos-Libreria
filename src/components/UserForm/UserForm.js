import React, {useState} from 'react'
import db from '../../firebase/config';
import {collection, addDoc} from "firebase/firestore";


function UserForm({cart}) {

    const total = []
    cart.forEach(function (arrayItem) {
        var x = arrayItem.price * arrayItem.click;
        total.push(x);
    });
    const totalFinal = total.reduce((acumulador, b) => acumulador + b, 0)

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
        ;addDoc(ordersCollection, orden)
        }

    return (
        <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <p>TotalFInal: {totalFinal}</p>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
        </div>

        <div>
          <button type="submit" onTouch={handleSubmit}>
            Finalizar Compra
          </button>
        </div>
      </form>
      );


}





export default UserForm