import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const sectionTitle = 'See Top Listings in Your Area';
const sectionParagraph = 'We do our job on guaranteeing ownership of property before putting it on the market.';
const buttonText = "View More";

const propertyData = [
  {
    imgUrl: 'https://www.propertypro.ng/venice/wp-content/uploads/2023/04/DSC06820-scaled.jpg',
    category: 'Mini Flats',
    title: 'Modern Mini Flat in Lekki',
    sellerImage: 'assets/images/property/agent1.jpg',
    sellerName: 'Property Agent 1',
    price: '₦ 1,500,000',
    id: 1,
  },
  {
    imgUrl: 'https://images.squarespace-cdn.com/content/v1/63e37c4c18b70721172c8527/51067537-3605-49eb-8ead-0c67ebfdaccd/MICDEE_DESIGNS_MUTUAL_BENEFITS_CEO_OFFICE_33_tovkzn.jpg?format=1500w',
    category: 'Office Spaces',
    title: 'Spacious Office Space in Ikeja',
    sellerImage: 'assets/images/property/agent2.jpg',
    sellerName: 'Property Agent 2',
    price: '₦ 3,000,000',
    id: 2,
  },
  {
    imgUrl: 'https://lh3.googleusercontent.com/p/AF1QipPwoxI_Avpoa8yVDUU2k1wyHDDY9i5T1rJF0TcG=s680-w680-h510',
    category: 'Flats and Apartments',
    title: 'Luxury Apartment in Victoria Island',
    sellerImage: 'assets/images/property/agent3.jpg',
    sellerName: 'Property Agent 3',
    price: '₦ 2,500,000',
    id: 3,
  },
  {
    imgUrl: 'https://static.trip101.com/paragraph_media/pictures/002/640/384/large/palms-shopping-mall2-1659429899.jpg?1659431904',
    category: 'Shops',
    title: 'Shop in a Mall, Onisha',
    sellerImage: 'assets/images/property/agent4.jpg',
    sellerName: 'Property Agent 4',
    price: '₦ 800,000',
    id: 4,
  },
  
  {
    imgUrl: 'https://meritabode.com/wp-content/uploads/2021/03/3-bedrom-1000-x-800.jpg',
    category: 'Semi Detached Bungalow',
    title: 'Bungalow in Surulere',
    sellerImage: 'assets/images/property/agent5.jpg',
    sellerName: 'Property Agent 5',
    price: '₦ 1,200,000',
    id: 5,
  },
  {
    imgUrl: 'https://agilitylogisticsparks.com/wp-content/uploads/2024/02/Inside-Warehouse-Ghana-1-1.jpeg',
    category: 'Warehouses',
    title: 'Large Warehouse in Apapa',
    sellerImage: 'assets/images/property/agent6.jpg',
    sellerName: 'Property Agent 6',
    price: '₦ 5,000,000',
    id: 6,
  },
];

const Card = () => {
  const [properties, setProperties] = React.useState(propertyData);

  const filterProperties = (category) => {
    if (category === 'All') {
      setProperties(propertyData);
    } else {
      const updatedProperties = propertyData.filter((property) => property.category.includes(category));
      setProperties(updatedProperties);
    }
  };

  return (
    <div className='property-section style-3 padding-tb'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='title'>{sectionTitle}</h1>
          <p className='paragraph'>{sectionParagraph}</p>

          <div className='property-filter-group'>
            <ul className='lab-ul'>
              <li onClick={() => filterProperties('All')} style={{ fontWeight: 'bold', color: '#ED3237' }}>All</li>
              <li onClick={() => filterProperties('Mini Flats')}>Mini Flats</li>
              <li onClick={() => filterProperties('Office Spaces')}>Office Spaces</li>
              <li onClick={() => filterProperties('Flats and Apartments')}>Flats and Apartments</li>
              <li onClick={() => filterProperties('Shops')}>Shops</li>
              <li onClick={() => filterProperties('Semi Detached Bungalow')}>Semi Detached Bungalow</li>
              <li onClick={() => filterProperties('Warehouses')}>Warehouses</li>
            </ul>
          </div>
        </div>

        <div className='slider top-slider'>
          {properties.slice(0, 3).map((property) => (
            <div key={property.id} className='property-item'>
              <div className='property-thum'>
                <img src={property.imgUrl} alt={property.title} />
                <div className='property-category'>
                  <a href='#' style={{textDecoration: 'none', color: 'white'}}>{property.category}</a>
                </div>
              </div>
              <div className='property-content'>
                <Link to={`/property/${property.id}`} className='property-title'>{property.title}</Link>
                <div className='property-footer'>
                  <div className='property-author'>
                    <Link to='/'>{property.sellerName}</Link>
                  </div>
                  <div className='property-price'>{property.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='slider bottom-slider'>
          {properties.slice(3, 6).map((property) => (
            <div key={property.id} className='property-item'>
              <div className='property-thum'>
                <img src={property.imgUrl} alt={property.title} />
                <div className='property-category'>
                  <a href='#' style={{textDecoration: 'none', color: 'white'}}>{property.category}</a>
                </div>
              </div>
              <div className='property-content'>
                <Link to={`/property/${property.id}`} className='property-title'>{property.title}</Link>
                <div className='property-footer'>
                  <div className='property-author'>
                    <Link to='/'>{property.sellerName}</Link>
                  </div>
                  <div className='property-price'>{property.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="view-more-btn">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
