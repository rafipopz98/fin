import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Item from "./Item";
// import SectionTitle from './SectionTitle';
import "swiper/swiper-bundle.min.css";
import Projects from "../assets/data/Calculators";
// import Fade from 'react-reveal'
import {NavLink} from 'react-router-dom'

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
 ${'' /* margin: auto 4%; */}
background-color:#f7fff0;
  margin-top: -270px;
  padding: 10rem 0;
  h2 {
    text-align: center;
    font-family: "Montserrat Bold";
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  h1 {
    text-align: center;
    font-family: "Montserrat Bold";
    font-size: 4rem;
    margin-top: 1.5rem;
    text-transform: uppercase;
  }
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function Section() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <h2>MOST USED ONES</h2>

        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {Projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <Item
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <h2>
      <NavLink to="/CalcPage">
      see all
      </NavLink>
        
      </h2>
    </ProjectSectionStyle>
  );
}
