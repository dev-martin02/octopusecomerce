import { Star } from "lucide-react";

export default function Home() {
  const BestSellerCard = ({
    name,
    price,
    reviewRate,
  }: {
    name: string;
    price: number;
    reviewRate: number;
  }) => (
    <div>
      <div className="bg-purple-200 w-full h-40"></div>
      <p className="font-bold text-xl text-white">{name}</p>
      <div className="flex  justify-between px-1">
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
    <>
      <div className="w-full bg-yellow-950" style={{ height: "600px" }}></div>

      <main className="p-3 flex flex-col gap-28 max-w-screen-2xl ">
        {/* Best Sellers */}
        <section className="w-full">
          <h2 className="text-3xl font-bold text-white">Best Sellers</h2>
          <main className="mt-6 grid grid-cols-2 gap-4 md:flex md:justify-center">
            <BestSellerCard name={"Perfum 1"} price={20} reviewRate={4} />
            <BestSellerCard name={"Perfum 2"} price={40} reviewRate={5} />
            <BestSellerCard name={"Perfum 3"} price={30} reviewRate={4.5} />
            <BestSellerCard name={"Perfum 4"} price={50} reviewRate={4.2} />
          </main>
        </section>

        {/* Newest Arrival */}
        <div className="flex flex-col gap-4 w-full md:flex-row ">
          <div>
            <div className="bg-blue-400 w-full h-64"></div>
          </div>

          <div className="flex justify-between flex-col w-full gap-5">
            <div>
              <h3 className="font-bold text-2xl">Random Name</h3>
              <p className="mt-1">
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
    </>
  );
}
