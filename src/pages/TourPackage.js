import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const TourPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (

     <>
    <Header />
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">Tour Package</h1>
      </section>

      <section class="section tour container">
        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-1.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">인기 여행지</h5>
              <span class="tour__data-subtitle">최근 인기 여행지로 떠나기</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-2.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">국내여행</h5>
              <span class="tour__data-subtitle">국내여행으로 떠나기</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">해외여행</h5>
              <span class="tour__data-subtitle">해외여행으로 떠나기</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-4.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">호텔</h5>
              <span class="tour__data-subtitle">뷰가 좋은 호텔 알아보기</span>
            </div>
          <Link to="tour-package/asd" class="tour__link"></Link>          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
    )  
} 

export default TourPackage;