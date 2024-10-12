import { useParams } from "react-router-dom";

export default function ProductCard() {
  const productContent = useParams();

  return (
    <section>
      <figure>
        <div className="h-50 w-50 bg-indigo-400"></div>
      </figure>
      <main>
        <header>
          <p>Valentino</p>
          <p>$60</p>
        </header>
        <p>
          Valentino Uomo Born In Roma Coral Fantasy by Valentino is a Woody
          Aromatic fragrance for men. This is a new fragrance. Valentino Uomo
          Born In Roma Coral Fantasy was launched in 2022. Valentino Uomo Born
          In Roma Coral Fantasy was created by Nicolas Beaulieu and
          Jean-Christophe Hérault. Top notes are Red Apple, Cardamom and
          Calabrian bergamot; middle notes are Lavender, Bourbon Geranium and
          Clary Sage; base notes are Tobacco Leaf, Patchouli and Haitian
          Vetiver.
        </p>
        <div>
          <button>Add To card</button>
        </div>
      </main>
    </section>
  );
}
