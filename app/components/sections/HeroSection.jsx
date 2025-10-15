import Button from "../ui/Button";

export default function HeroSection({ data }) {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.background})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 drop-shadow-lg">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 my-5 drop-shadow-md">
          {data.description}
        </p>
        <Button href={data.buttonHref}>{data.buttonText}</Button>
      </div>
    </section>
  );
}