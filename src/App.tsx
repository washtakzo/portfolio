import React from "react";
import CTAButton from "./components/CTAButton";
import Header from "./components/Header";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Technologie from "./components/Technologie";
import { testimonials, projects, technologies } from "./assets/content";

function App() {
  return (
    <>
      <Header />
      <main className="lg:min-w-[1000px] mx-auto lg:w-[80%] max-w-[1600px] px-6 md:px-10">
        <section className="lg:h-[90vh] lg:flex lg:flex-col justify-center">
          <div className="flex flex-col my-16 gap-8 justify-between lg:flex-row lg:m-0">
            <img
              className="w-48 rounded-lg mx-auto sm:w-[260px] lg:order-1 lg:w-[34%] lg:max-w-[380px] lg:mx-0"
              src="https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/634d774671eca125c2837135_portfolio-sept-22-v3-p-800.jpg"
              alt="photo de profil"
            />
            <div className="flex flex-col justify-between h-[242px]s sm:h-[280px] md:h-[340px]  lg:h-auto lg:justify-evenly lg:max-w-[740px]">
              <h2 className="font-serif leading-[3rem] sm:leading-[3.8rem] md:leading-[4.2rem] text-3xl max-w-[445px] mx-auto sm:text-[42px] sm:max-w-none md:text-[52px]">
                Des applications React orientées
                <span className="text-secondary"> santé et bien-être, </span>
                soignées et maintenables
              </h2>
              <CTAButton className="block mx-auto mt-8 py-3 px-6 text-xl sm:m-0 sm:self-start">
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
          <h3 className="font-serif text-[32px] text-center sm:text-[48px]">
            Projets
          </h3>
          {projects.map(
            ({ title, description, technologies, image }, index) => (
              <Project
                key={title}
                title={title}
                description={description}
                technologies={technologies}
                image={image}
                order={index % 2 === 0 ? 1 : -1}
              />
            )
          )}
        </section>
        <section className="py-20">
          <h3 className="font-serif text-[32px] text-center sm:text-[48px] py-8">
            Technologies
          </h3>
          <div className="grid grid-cols-2 mx-auto sm:grid-cols-4 max-w-[940px]">
            {technologies.map(({ image, title }) => (
              <Technologie key={title} image={image} title={title} />
            ))}
          </div>
        </section>
      </main>
    </>
    //Technologie Section
    //Lets talk
  );
}

export default App;
