import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

    return (
      <>
    <Header />
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">About Us</h1>
      </section>

      <section class="section about container">
        <div class="about__container">
          <img class="about__img" src="./media/about-image.jpg" alt="" />

          <div class="about__data">
            <h3 class="about__data-title"> </h3>
            <p class="about__data-description">
              
            </p>
            <p class="about__data-description">
              
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
    )
}

export default About;