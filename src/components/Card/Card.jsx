import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRightToLine } from "react-icons/lu";
import './Card.css';

const sectionTitle = 'Featured Properties';
const buttonText = "Find Property For Rent";


const propertyData = [
  {
    imgUrl: 'https://www.propertypro.ng/venice/wp-content/uploads/2023/04/DSC06820-scaled.jpg',
    category: 'Mini Flats',
    title: 'Modern Mini Flat in Lekki',
    sellerImage: 'assets/images/property/agent1.jpg',
    sellerName: 'G.O.E Realtors',
    price: '₦ 1,500,000',
    id: 1,
  },
  {
    imgUrl: 'https://res.cloudinary.com/dffhadvza/image/upload/v1654698023/micdee/Quickcheck-8_l3djgx.jpg',
    category: 'Office Spaces',
    title: 'Spacious Office Space in Ikeja',
    sellerImage: 'assets/images/property/agent2.jpg',
    sellerName: 'Cadwell Ltd',
    price: '₦ 3,000,000',
    id: 2,
  },
  {
    imgUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443339138.jpg?k=785a0986d58fab868c286bef37eca9a9799410df6c80d324aabfac1ae0b7fdae&o=&hp=1',
    category: 'Flats and Apartments',
    title: 'Luxury Apartment in Victoria Island',
    sellerImage: 'assets/images/property/agent3.jpg',
    sellerName: 'King’s Court Realtors',
    price: '₦ 2,500,000',
    id: 3,
  },
  {
    imgUrl: 'https://static.trip101.com/paragraph_media/pictures/002/640/384/large/palms-shopping-mall2-1659429899.jpg?1659431904',
    category: 'Shops',
    title: 'Shop in a Mall, Onisha',
    sellerImage: 'assets/images/property/agent4.jpg',
    sellerName: 'Sterling Homes',
    price: '₦ 800,000',
    id: 4,
  },
  {
    imgUrl: 'https://i0.wp.com/mercy-homes.com/wp-content/uploads/2023/10/rccg-pic-.jpeg?resize=960%2C540&ssl=1',
    category: 'Semi Detached Bungalow',
    title: 'Bungalow in Surulere',
    sellerImage: 'assets/images/property/agent5.jpg',
    sellerName: 'Rotimi Olu & Co',
    price: '₦ 1,200,000',
    id: 5,
  },
  {
    imgUrl: 'https://agilitylogisticsparks.com/wp-content/uploads/2024/02/Inside-Warehouse-Ghana-1-1.jpeg',
    category: 'Warehouses',
    title: 'Warehouse in Apapa',
    sellerImage: 'assets/images/property/agent6.jpg',
    sellerName: 'Adron Homes and Property',
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
            <div key={property.id} className='card-property-item'>
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
            <div key={property.id} className='card-property-item'>
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
        <Link to='/auth/signup'>
        <div className="button-container">
          <button className="view-more-btn">{buttonText}</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
