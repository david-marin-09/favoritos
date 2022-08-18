import React  from 'react'
import '../App'
import { useNavigate } from 'react-router-dom'
import  {useAppContext} from '../Context/AppContext'

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  
  const navigate = useNavigate();
  const FavoritesChecker = (name) => {
    const boolean = favorites.some((people) => people.name == name);
    return boolean;
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {favorites.length > 0 ? (
            favorites.map((item,index) => (
              <div className="col-md-3" key={index}>
                <div className="card mb-4 text-bg-secondary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png" class="card-img-top" alt={item.name}/>
                  <div className="card-body">
                  
                    <h5 className="card-title">
                      <a onClick={()=>navigate(`/list/${index +1 }`)}>Nombre: {item.name}</a></h5>
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
            ))
          ) : (
            <p className="text-center fs-3">No hay favoritos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites