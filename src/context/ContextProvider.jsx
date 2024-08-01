import { createContext, useReducer } from "react";

export const PropertyContext = createContext(null);

const initialState = {
  favourites: [],
  properties: [],
};

const ADD_TO_FAVOURITE = "addToFavourite";
const ADD_PROPERTY = "addProperty";
const UPDATE_PROPERTY = "updateProperty";
const DELETE_PROPERTY = "deleteProperty";
const SET_PROPERTIES = "setProperties";
const FILTER_PROPERTIES = "filterProperties";
const SORT_PROPERTIES = "sortProperties";
const CLEAR_PROPERTIES = "clearProperties";
const SEARCH_PROPERTIES = "searchProperties";

const favouritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      const itemIndex = state.findIndex((e) => e.id === action.payload.id);
      if (itemIndex === -1) {
        return [...state, { ...action.payload, QTY: 1 }];
      } else {
        console.error("Property already added");
        return state;
      }
    default:
      console.error("Unknown action type");
      return state;
  }
};

const propertiesReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROPERTY:
      return [...state, { ...action.payload, id: state.length }];
    case UPDATE_PROPERTY:
      return state.map((property) =>
        property.id === action.payload.id
          ? { ...property, ...action.payload.data }
          : property
      );
    case DELETE_PROPERTY:
      return state.filter((property) => property.id !== action.payload.id);
    case SET_PROPERTIES:
      return action.payload;
    case FILTER_PROPERTIES:
      return state.filter((property) =>
        Object.entries(action.payload).every(
          ([key, value]) => property[key] === value
        )
      );
    case SORT_PROPERTIES:
      return [...state].sort((a, b) =>
        action.payload.direction === "asc"
          ? a[action.payload.field] > b[action.payload.field]
            ? 1
            : -1
          : a[action.payload.field] < b[action.payload.field]
          ? 1
          : -1
      );
    case CLEAR_PROPERTIES:
      return [];
    case SEARCH_PROPERTIES:
      return state.filter((property) =>
        Object.values(property).some((val) =>
          String(val).toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    default:
      console.error("Unknown action type");
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [favourites, dispatchFavourites] = useReducer(favouritesReducer, initialState.favourites);
  const [properties, dispatchProperties] = useReducer(propertiesReducer, initialState.properties);

  return (
    <PropertyContext.Provider value={{ favourites, dispatchFavourites, properties, dispatchProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default ContextProvider;
