import React, { useEffect } from "react";
import CTAButton from "./components/CTAButton";
import Header from "./components/Header";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Technologie from "./components/Technologie";
import { testimonials, projects, technologies } from "./assets/content";
import AOS from "aos";
import "aos/dist/aos.css";

const CALENDLY_LINK = "https://calendly.com/zoher-ouazzar/30min";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  //TODO: Header : update mobile mode cross and burger menu animations

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-6 md:px-10 lg:w-[80%] lg:min-w-[1000px]">
        <section className="justify-center lg:flex lg:h-[90vh] lg:flex-col">
          <div className="my-16 flex flex-col justify-between gap-8 lg:m-0 lg:flex-row">
            <img
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
              className="mx-auto w-48 rounded-lg sm:w-[260px] lg:order-1 lg:mx-0 lg:w-[34%] lg:max-w-[380px]"
              src="https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/634d774671eca125c2837135_portfolio-sept-22-v3-p-800.jpg"
              alt="photo de profil"
            />
            <div className="h-[242px]s flex flex-col justify-between sm:h-[280px] md:h-[340px]  lg:h-auto lg:max-w-[740px] lg:justify-evenly">
              <h2
                data-aos="fade-down"
                className="mx-auto max-w-[445px] font-serif text-3xl leading-[3rem] text-primary sm:max-w-none sm:text-[42px] sm:leading-[3.8rem] md:text-[52px] md:leading-[4.2rem]"
              >
                Des applications React orientées
                <span className="text-secondary"> santé et bien-être, </span>
                soignées et maintenables
              </h2>
              <CTAButton
                aos="fade-up"
                aosDelay="400"
                aosDuration="600"
                aosEasing="ease-in-out"
                className="mx-auto mt-8 block py-3 px-6 text-xl sm:m-0 sm:self-start"
                link="https://calendly.com/zoher-ouazzar/30min"
              >
                Contactez-moi
              </CTAButton>
            </div>
          </div>
        </section>
        <section className="py-10">
          {testimonials.map(({ image, text, author }) => (
            <Testimonial
              key={author}
              image={image}
              text={text}
              author={author}
            />
          ))}
        </section>
        <section className="py-20">
          <h3
            data-aos="fade-up"
            className="text-center font-serif text-[32px] text-primary sm:text-[48px]"
            id="projects"
          >
            Projets
          </h3>
          {projects.map(
            ({ title, description, technologies, image, link }, index) => (
              <Project
                key={title}
                title={title}
                description={description}
                technologies={technologies}
                image={image}
                link={link}
                order={index % 2 === 0 ? 1 : -1}
              />
            )
          )}
        </section>
        <section data-aos="fade-up" className="py-20">
          <h3 className="py-8x text-center font-serif text-[32px] text-primary sm:text-[48px]">
            Technologies
          </h3>
          <div className="mx-auto grid max-w-[940px] grid-cols-2 sm:grid-cols-4 lg:my-[144px] lg:gap-6">
            {technologies.map(({ image, title }) => (
              <Technologie key={title} image={image} title={title} />
            ))}
          </div>
        </section>
      </main>
      <footer
        onClick={() => {
          window.open(CALENDLY_LINK, "_blank");
        }}
        className="my-8 mx-auto flex w-[94%] max-w-[1200px] cursor-pointer flex-col rounded-xl bg-primary py-8 px-8 text-white transition  duration-300 ease-out hover:scale-105 sm:py-20 lg:py-[60px] lg:px-[100px]"
      >
        <h5 className="mb-8 text-center text-[22px] font-semibold sm:text-[28px] md:text-[32px] lg:text-[42px]">
          Parlons de vos projets et voyons ensemble comment je peux vous aider à
          les réaliser
        </h5>
        <CTAButton
          className="mx-auto px-8 text-[15px] transition duration-300 ease-out hover:scale-105 md:text-[16px]"
          link={CALENDLY_LINK}
        >
          Contactez-moi
        </CTAButton>
      </footer>
    </>
  );
}

export default App;
