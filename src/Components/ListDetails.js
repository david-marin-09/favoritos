import React ,{useEffect, useState} from 'react'
import '../App'
import { API_DETAIL } from '../API'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import  {useAppContext} from '../Context/AppContext'
const ListDetails = () => {
  const [people, setPeople] = useState([])
  const { id } = useParams();

  useEffect(() => {
        
    axios.get(`${API_DETAIL}/${id}`)
.then(function (response) {
// handle success
setPeople(response.data)
console.log(response);
})
.catch(function (error) {
// handle error
console.log(error);
})
.then(function () {
// always executed
});
    }, [id])
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <p>Nombre: {
     people.name
    }</p>
    <p>Altura:{
      people.height
    }</p>
    <p>Peso:{
      people.mass
    }</p>
    
    <p>Cumpleaños:{
      people.birth_year
    }</p>
    

        </div>
      </div>
    </div>
    
    </>

  )
}

export default ListDetails