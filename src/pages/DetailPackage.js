import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const DetailPackage = () => {
  const [selectedImage, setSelectedImage] = useState('../media/detail-img.jpg')
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (
    <>
    <Header />
    <main class="container" style={{marginTop: "120px"}}>
      <section class="detail">
        <div class="detail__card card">
          <img
            src={selectedImage}
            alt=""
            class="detail__card-img"
          />
          <div class="detail__card-img-list">
            <img
              src="../media/detail-img.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/img-1.jpg' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img2.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img2.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img.jpg2' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img3.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img3.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img.jpg3' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img4.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img4.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img.jpg4' ? 'active' : ''}`}
            />
          </div>
          <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>$100 <span>/ 4D3N</span></h5>
            </div>
            <p class="detail__card-description">
              
            </p>
          </div>
        </div>
        
        
      </section>
    </main>
    <Footer />
    </>
    );
};

export default DetailPackage;