import { FaHeart } from "react-icons/fa";
import Button from "../ui/Button";

export default function JoinSection({ data }) {
  return (
    <section className="relative bg-red-900 py-16 px-6 md:px-16 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center gap-2">
        <FaHeart /> {data.title}
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-200">{data.description}</p>
      <Button href={data.buttonHref} variant="secondary">
        {data.buttonText}
      </Button>
    </section>
  );
}