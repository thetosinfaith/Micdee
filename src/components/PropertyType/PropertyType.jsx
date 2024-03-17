import React from 'react';

const PropertyType = ({ select }) => {
  return (
    <select value={select} onChange={(e) => console.log(e.target.value)}>
      <option value="">Property Type</option>
      <option value="Mini Flats">Mini Flats</option>
      <option value="Office Spaces">Office Spaces</option>
      <option value="Flats and Apartments">Flats and Apartments</option>
      <option value="Shop">Shop</option>
      <option value="Semi Detached Bungalow">Semi Detached Bungalow</option>
      <option value="Warehouse">Warehouse</option>
      <option value="Co-working space">Co-working space</option>
      <option value="Semi Detached Duplex">Semi Detached Duplex</option>
      <option value="Commercial Properties">Commercial Properties</option>
      <option value="Houses">Houses</option>
      <option value="Terraced Bungalow">Terraced Bungalow</option>
      <option value="Self Contain">Self Contain</option>
      <option value="Terraced Duplex">Terraced Duplex</option>
      <option value="Shop in a Mall">Shop in a Mall</option>
      <option value="Lands">Lands</option>
      <option value="Detached Bungalow">Detached Bungalow</option>
    </select>
  );
};

export default PropertyType;
