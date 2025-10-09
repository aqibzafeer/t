"use client";
import Button from "@/components/navbar/Button";

export default function Home() {
  return (
    <>

      <div className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-section-bg.jpg')" }}>
 
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">  Healthy Beverage </h1>
          <p className="text-lg md:text-xl text-gray-200 my-5 drop-shadow-md">
            Our wellness journeys begin as small steps which become straightforward over time.
            Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.
          </p>
          <Button href="/">About Us</Button>
        </div>
      </div>

 
 
      <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
         <div className="flex justify-center"> <img  src="/about.webp" alt="Our Products"  className="rounded-2xl shadow-lg w-full  object-cover"/></div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">About Us</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Ambala Tea, we believe wellness starts with a single sip. Our teas are crafted
                with nature’s finest herbs, providing the nourishment your body needs to thrive
                every day.  Our wellness journeys begin as small steps which become straightforward over time. 
                Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.
              </p>
          </div>  
        </div>
      </section>
 

      <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">  Our Story </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Ambala Tea, we believe wellness starts with a single sip. Our teas are crafted
              with nature’s finest herbs, providing the nourishment your body needs to thrive
              every day. Our wellness journeys begin as small steps which become straightforward over time. 
              Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.
            </p>
          </div>


  
          <div className="flex justify-center">            <img src="/about.webp" alt="Our Products"  className="rounded-2xl shadow-lg w-full  object-cover"/>
          </div>
        </div>
      </section>

   
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon-700 mb-4"> Our Products </h2>
          <p className="text-gray-600 max-w-2xl mx-auto"> Explore our range of premium teas and wellness products designed to rejuvenate your body and calm your mind. </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Green Tea", "Black Tea", "Herbal Tea", "Special Blend"].map((product, i) => (
            <div key={i} className="bg-gray-50 hover:bg-emerald-50 transition-colors duration-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center">
              <img src={`/about-${i + 1}.webp`} alt={product}  className="w-32 h-32 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product}</h3>
              <p className="text-gray-600 text-sm">  Experience the authentic taste and aroma of {product}.</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
