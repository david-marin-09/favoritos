import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

export const useAppContext = () => {

    const context = useContext(AppContext)

    if(context === undefined){
        throw new Error('AppContext no carga appContextProvider')    
    }

    return context;
}


export const AppContextProvider = ({ children }) => {    

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (people) => {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.concat(people)

        setFavorites(newFavorites)
    }

    const removeFromFavorites = (name) => {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.filter((people)=>people.name != name)
        setFavorites(newFavorites)
    }

  return (
    <AppContext.Provider value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
    }}>
        {children}
    </AppContext.Provider>
  )
}