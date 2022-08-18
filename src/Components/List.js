import React ,{useEffect, useState} from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'

import  {useAppContext} from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const List = () => {

    const [people, setPeople] = useState([])

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();
    const navigate = useNavigate();


const FavoritesChecker = (name) => {
    const boolean = favorites.some((people) => people.name == name)
    return boolean;
}

    useEffect(() => {
        
        axios.get(API_URL)
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
        }, [])
    

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          
          {people.results &&
            people.results.map((item,index) => (
              <div className="col-md-3" key={index}>
         
                <div className="card mb-4 text-bg-secondary">
                  <div className="card-body">
                    <h5 className="card-title"><a onClick={()=>navigate(`/list/${index +1 }`)}>Nombre: {item.name}</a></h5>
                    <p className="card-text">Altura: {item.height}</p>
                    <p className="card-text">Peso:{item.mass}</p>
                    <p className="card-text">Cumpleaños:{item.birth_year}</p>
                    {FavoritesChecker(item.name) ? (
                      <a
                        onClick={() => removeFromFavorites(item.name)}
                        className="btn btn-dark"
                      >
                        Eliminar Favoritos
                      </a>
                    ) : (
                      <a
                        onClick={() => addToFavorites(item)}
                        className="btn btn-dark"
                      >
                        Agregar a Favoritos
                      </a>
                    )}
                  </div>
                </div>
                
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default List