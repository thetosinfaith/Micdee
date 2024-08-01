import React, { useContext, useEffect, useState } from 'react';
import './Properties.css';
import Database from '../../database/properties.json';
import { PropertyContext } from '../../context/ContextProvider';
import { CiLocationOn } from "react-icons/ci";


const Properties = () => {
  const [properties, setProperties] = useState([]);
  const { dispatch, state } = useContext(PropertyContext);

  useEffect(() => {
    setProperties(Database);
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString('en-NG', {
      style: 'currency',
      currency: 'NGN'
    });
  };

  return (
    <div className='properties-container'>
      {
        properties.map((property) => (
          <div key={property.id} className='property-item'>
            <img src={property.img} alt={`${property.type} in ${property.location}`} />
            <h4>{property.type}</h4>
            <p>{formatPrice(property.price)}</p>
            <p class="property-location">
            <CiLocationOn /> {property.location}
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default Properties;
