import React ,{useEffect, useState} from 'react'
import '../App'
import axios from 'axios'

import  {useAppContext} from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

const List = () => {

    const [people, setPeople] = useState([]) 
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();
    const navigate = useNavigate();
  

    const FavoritesChecker = (name) => {
        const boolean = favorites.some((people) => people.name == name)
        return boolean;
    }

    useEffect(() => {
        
        axios.get(`https://swapi.dev/api/people/?page=${page}&format=json`)
  .then(function (response) {
    // handle success
    console.log(response.data.results)
    setPeople((prevPeople) => prevPeople.concat(response.data.results));
    setHasMore(page < response.data.count);
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
        }, [page])
    

  return (
    <>
      <div className="container mt-5">
        <InfiniteScroll
          dataLength={people.length} //This is important field to render the next data
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={hasMore}
          loader={<h4>Cargando...</h4>}
          className="row"
        >
          {people.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4 text-bg-secondary">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
                  class="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a onClick={() => navigate(`/list/${index + 1}`)}>
                      Nombre: {item.name}
                    </a>
                  </h5>
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
        </InfiniteScroll>
      </div>
    </>
  );
}

export default List