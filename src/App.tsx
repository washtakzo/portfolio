import React from "react";
import CTAButton from "./components/CTAButton";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="lg:min-w-[1000px] mx-auto lg:w-[80%] max-w-[1600px]">
        <section className="lg:h-[90vh] lg:flex lg:flex-col justify-center">
          <div className="flex flex-col my-16 gap-8 justify-between lg:flex-row lg:m-0">
            <img
              className="w-48 rounded-lg mx-auto sm:w-[260px] lg:order-1 lg:w-[34%] lg:max-w-[380px] lg:mx-0"
              src="https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/634d774671eca125c2837135_portfolio-sept-22-v3-p-800.jpg"
              alt="photo de profil"
            />
            <div className="flex flex-col justify-between px-6 h-[242px] sm:h-[280px] md:h-[340px] md:px-10 lg:h-auto lg:px-0 lg:justify-evenly lg:max-w-[740px]">
              <h2 className="font-serif leading-[3rem] sm:leading-[3.8rem] md:leading-[4.2rem] text-3xl max-w-[445px] mx-auto sm:text-[42px] sm:max-w-none md:text-[52px]">
                Des applications React orientées
                <span className="text-secondary"> santé et bien-être, </span>
                soignées et maintenables
              </h2>
              <CTAButton className="block mx-auto py-3 px-6 text-xl sm:ml-0">
                Contactez-moi
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </>
    //Testimonials
    //Projects section
    //Technologie Section
    //Lets talk
  );
}

export default App;
