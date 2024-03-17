import { createContext, useReducer } from "react";
import Database from '../../database/properties.json';

export const PropertiesContext = createContext(null);

const initialState = {
  properties: Database,
  favouritesList: []
};

const savedPropertiesReducer = (state, action) => {
  switch (action.type) {
    case 'addToFavouritesList':
      const propertyId = action.payload.id;
      const isInFavourites = state.favouritesList.includes(propertyId);
      if (!isInFavourites) {
        return {
          ...state,
          favouritesList: [...state.favouritesList, propertyId]
        };
      } else {
        alert('Property already added to your favourites');
        return state;
      }

      case 'removeFromFavouritesList':
        const propertyIdToRemove = action.payload.id;
        return{
            ...state,
            favouritesList: [...state.favouritesList.filter(id => id !== propertyIdToRemove)]
        };

      case 'clearFavouritesList':
        return{
            ...state,
            favouritesList: []
        };
      
    default:
      return state;
  }
};

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(savedPropertiesReducer, initialState);

  return (
    <PropertiesContext.Provider value={{ state, dispatch }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
