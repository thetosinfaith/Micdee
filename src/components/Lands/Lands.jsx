import React from 'react';
import { Link } from 'react-router-dom';
import './Lands.css';

const sectionTitle = 'Our Recent Projects';
const buttonText = "Find Land For Sale";

const landData = [
    {
      imgUrl: 'https://sterlinghomesltd.com/wp-content/uploads/2023/08/1-6.png',
      title: 'Greenfield Estate',
      sellerImage: 'assets/images/land/agent1.jpg',
      sellerName: 'G.O.E Realtors',
      price: 'From ₦250,000',
      id: 1,
      description: 'Prime residential land in a tranquil area. Ideal for building your dream home or investment.'
    },
    {
      imgUrl: 'https://sterlinghomesltd.com/wp-content/uploads/2023/02/WhatsApp-Image-2022-08-19-at-8.12.56-PM-1-ptibs34fbjjrpm9zso1eh3ucfs0bh7g4jc5pwwvark.jpeg',
      title: 'Centra Plaza',
      sellerImage: 'assets/images/land/agent2.jpg',
      sellerName: 'Urban Vision Realty',
      price: '₦ 3,000,000',
      id: 2,
      description: 'Strategic commercial land in a high-traffic area, perfect for business development.'
    },
    {
      imgUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/443339138.jpg?k=785a0986d58fab868c286bef37eca9a9799410df6c80d324aabfac1ae0b7fdae&o=&hp=1',
      title: 'Prestige Heights',
      sellerImage: 'assets/images/land/agent3.jpg',
      sellerName: 'Prestige Land Brokers',
      price: '₦ 2,500,000',
      id: 3,
      description: 'Exclusive land with premium features in an upscale neighborhood.'
    },
    {
      imgUrl: 'https://sterlinghomesltd.com/wp-content/uploads/2023/02/20220118_124647-ppwoe1hbm2k5jvhevzgple6qd500n6ozfmkzzkrfpc.jpg',
      title: 'Market Square Lot',
      sellerImage: 'assets/images/land/agent4.jpg',
      sellerName: 'Vanguard Realty',
      price: '₦ 800,000',
      id: 4,
      description: 'Land in a prime retail area, perfect for shops or commercial enterprises.'
    },
    {
      imgUrl: 'https://meritabode.com/wp-content/uploads/2021/03/3-bedrom-1000-x-800.jpg',
      title: 'Sunrise Meadows',
      sellerImage: 'assets/images/land/agent5.jpg',
      sellerName: 'Harmony Estates',
      price: '₦ 1,200,000',
      id: 5,
      description: 'Beautiful residential plot in a peaceful setting, ideal for a family home.'
    },
    {
      imgUrl: 'https://agilitylogisticsparks.com/wp-content/uploads/2024/02/Inside-Warehouse-Ghana-1-1.jpeg',
      title: 'Logistics Hub',
      sellerImage: 'assets/images/land/agent6.jpg',
      sellerName: 'Logistics Solutions Ltd',
      price: '₦ 5,000,000',
      id: 6,
      description: 'Expansive industrial land suitable for warehouses and large-scale operations.'
    },
  ];  

const Lands = () => {
  const [lands, setLands] = React.useState(landData);

  return (
    <div className='land-section style-3 padding-tb'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='title'>{sectionTitle}</h1>
        </div>

        <div className='slider top-slider'>
          {lands.slice(0, 3).map((land) => (
            <div key={land.id} className='land-item'>
              <div className='land-thum'>
                <img src={land.imgUrl} alt={land.title} />
              </div>
              <div className='land-content'>
                <Link to={`/land/${land.id}`} className='land-title'>{land.title}</Link>
                <div className='land-footer'>
                  <div className='land-author'>
                    <Link to='/'>{land.sellerName}</Link>
                  </div>
                  <div className='land-price'>{land.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='slider bottom-slider'>
          {lands.slice(3, 6).map((land) => (
            <div key={land.id} className='land-item'>
              <div className='land-thum'>
                <img src={land.imgUrl} alt={land.title} />
              </div>
              <div className='land-content'>
                <Link to={`/land/${land.id}`} className='land-title'>{land.title}</Link>
                <div className='land-footer'>
                  <div className='land-author'>
                    <Link to='/'>{land.sellerName}</Link>
                  </div>
                  <div className='land-price'>{land.price}</div>
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

export default Lands;
