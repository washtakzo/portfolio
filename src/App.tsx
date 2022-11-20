import React from "react";
import CTAButton from "./components/CTAButton";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";

const testimonials = [
  {
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/631b0234135f700a7ff501c9_temoignage%20port%20folio%20totof.png",
    text: "Travailler avec Zoher est un plaisir, malgré une prise de poste très rapide, il s'est adapté pour s'organiser de manière efficace. Sa curiosité lui a permis de vite monter en compétences.",
    author: "C. MARCHIO - Responsable d'affaire - SNCF",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/631b032f9148edb2acf6ab52_temoignage%20port%20folio%20mehdi.png",
    text: "Zoher est un très bon ingénieur ferroviaire, soucieux du détail et des exigences client, il a su composer avec les différentes contraintes pour toujours proposer une solution.",
    author: "E. KADER - Chef de projet - Alstom",
  },
];

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
            <Testimonial image={image} text={text} author={author} />
          ))}
        </section>
        <section className="">
          <h3>Projets</h3>
        </section>
      </main>
    </>
    //Projects section
    //Technologie Section
    //Lets talk
  );
}

export default App;
