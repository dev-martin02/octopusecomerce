import { Star } from "lucide-react";
import image from "./assets/perfurm/pexels-photo-19272234.webp";
import image1 from "./assets/perfurm/free-photo-of-perfume-in-a-bottle.jpeg";
import image2 from "./assets/perfurm/free-photo-of-valentino-uomo-perfume-bottle.jpeg";
import image3 from "./assets/perfurm/free-photo-of-vial-of-perfume-and-pink-flowers.jpeg";
import image4 from "./assets/perfurm/pexels-beautinow-niche-perfume-413075804-15275974.jpg";

export default function Home() {
  const BestSellerCard = ({
    name,
    price,
    reviewRate,
    imgUrl,
  }: {
    name: string;
    price: number;
    reviewRate: number;
    imgUrl: string;
  }) => (
    <div>
      <img src={imgUrl} className=" w-full h-52 md:h-60"></img>
      <p className="font-bold text-xl text-white">{name}</p>
      <div className="flex justify-between px-1">
        <p className="font-semibold text-lg text-white">${price}</p>
        <span className="flex text-md text-white items-center">
          <Star size={18} color="white" /> {reviewRate}
        </span>
      </div>
    </div>
  );

  const MenOrWomenSection = ({
    name,
    section,
  }: {
    name: string;
    section: string;
  }) => (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <button className="btn">View All</button>
      </div>
      {section === "women" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4">
          <div className="bg-green-800 w-40 sm:w-52 rounded-lg h-full sm:row-span-2"></div>
          <div className="bg-red-200 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-red-400 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-red-600 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-red-800 w-40 sm:w-52 rounded-lg h-40 hidden sm:grid "></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4">
          <div className="bg-red-200 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-red-400 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-green-800 w-40 sm:w-52 rounded-lg h-full sm:row-span-2"></div>
          <div className="bg-red-600 w-40 sm:w-52 rounded-lg h-40"></div>
          <div className="bg-red-800 w-40 sm:w-52 rounded-lg h-40 hidden sm:grid "></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center ">
      <div className="w-full flex max-w-screen-xl" style={{ height: "600px" }}>
        <div className="flex justify-center flex-col gap-4">
          <h2 className="font-bold text-4xl text-white">
            Unveil the Essence of Elegance
          </h2>
          <p className="font-bold text-md text-white">
            discover a world of captivating perfumes. From bold to subtle, each
            scent is crafted to perfection, ready to become your signature.
          </p>
          <p className="font-bold text-md text-white">
            Find your perfect fragrance today.
          </p>
        </div>
        <div className="bg-slate-100 w-full h-full max-w-screen-lg">
          <img src={image} alt="" className=" object-cover w-full h-full" />
        </div>
      </div>

      <main className="p-3 flex flex-col gap-28 max-w-screen-xl ">
        {/* Best Sellers */}
        <section className="w-full">
          <h2 className="text-3xl font-bold text-white">Best Sellers</h2>
          <main className="mt-6 grid grid-cols-2 gap-4 md:flex md:justify-around">
            <BestSellerCard
              imgUrl={image1}
              name={"Perfum 1"}
              price={20}
              reviewRate={4}
            />
            <BestSellerCard
              imgUrl={image2}
              name={"Perfum 2"}
              price={40}
              reviewRate={5}
            />
            <BestSellerCard
              imgUrl={image3}
              name={"Perfum 3"}
              price={30}
              reviewRate={4.5}
            />
            <BestSellerCard
              imgUrl={image4}
              name={"Perfum 4"}
              price={50}
              reviewRate={4.2}
            />
          </main>
        </section>

        {/* Newest Arrival */}
        <div className="flex flex-col gap-10 w-full md:flex-row  ">
          <div>
            <img src={image3} className=" w-full"></img>
          </div>

          <div className="flex justify-between flex-col w-full gap-5">
            <div className="max-w-lg">
              <h3 className="font-bold text-3xl">Random Name</h3>
              <p className="mt-1 text-white font-semibold text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem, libero. Nulla quas suscipit cum fuga officia et, ipsam
                facere inventore dolores voluptatem nam nisi? Dicta corporis
                molestiae optio reprehenderit labore?
              </p>
            </div>

            <div className="flex gap-4">
              <button className="btn">Add To card</button>
              <button className="btn">View Item</button>
            </div>
          </div>
        </div>

        {/* Men Section */}
        <MenOrWomenSection name="For Him" section="men" />

        {/* Women Section  */}
        <MenOrWomenSection name="For Her" section="women" />
      </main>
    </div>
  );
}
