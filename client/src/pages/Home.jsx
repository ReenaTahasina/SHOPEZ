import React from 'react';
import '../styles/Home.css';
import banner1 from '../images/home-banner1.png'; 
// import banner2 from '../images/home-banner-2.png'; // keep if you want to switch later
import Products from '../components/Products';
import Footer from '../components/Footer';
import FlashSale from '../components/FlashSale';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      {/* Single Banner */}
      <div className="home-banner">
        <img src={banner1} alt="Home Banner" />
      </div>

      {/* Categories */}
      <div className="home-categories-container">
        <div className="home-category-card" onClick={() => navigate('/category/Fashion')}>
          <img src="https://tse3.mm.bing.net/th/id/OIP.ORH_mwC_R1rP2xGViNy_lwHaE8?pid=Api&P=0&h=180" alt="Fashion" />
          <h5>Fashion</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Electronics')}>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg" alt="Electronics" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/mobiles')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUW7v1WFJL9Ylax9a4vazyKXwG-ktSinI4Rd7qi7MkhMr79UlIyyrNkbiK0Cz5u6WYw&usqp=CAU" alt="Mobiles" />
          <h5>Mobiles</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Groceries')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbpV_yQ_zCtZt_1kNebjvFqXvdDnLuuJPsQ&usqp=CAU" alt="Groceries" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Sports Equipments')}>
          <img src="https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/" alt="Sports Equipments" />
          <h5>Sports Equipments</h5>
        </div>
      </div>

      {/* Products */}
      <div id="products-body"></div>
      <Products category="all" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
