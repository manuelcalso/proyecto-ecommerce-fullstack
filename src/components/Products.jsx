import berserkerimg from "./../assets/products/berserker.jpg";
import lilacalavera from "./../assets/products/lilacalavera.jpg";
import lachilanga from "./../assets/products/lachilanga.webp";
import vintageskull from "./../assets/products/vintagecalaverayflores.jpg";
import redeyestee from "./../assets/products/ojosrojos.webp";
import purplecat from "./../assets/products/gatomorado.webp";
import radiohead from "./../assets/products/radiohead.webp";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Lila Calavera  Tee",
    href: "#",
    imageSrc: lilacalavera,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$40",
    color: "Violet",
    description:
      "Lila t-shirt painting with a skull and flowers by Herman Henstenburgh.",
  },
  {
    id: 3,
    name: "Berserk Tee",
    href: "#",
    imageSrc: berserkerimg,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$40",
    color: "Black",
    description: "Unisex T-shirt with Anime Print.",
  },
  {
    id: 4,
    name: "Chilanga Tee",
    href: "#",
    imageSrc: lachilanga,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$40",
    color: "Blue",
    description: "The chilanga",
  },
  {
    id: 5,
    name: "Vintage Skull Tee",
    href: "#",
    imageSrc: vintageskull,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$35",
    color: "White",
    description: "Vintage Men's Cotton T-shirt with Skulls and Flowers",
  },
  {
    id: 6,
    name: "Red Eyes Tee",
    href: "#",
    imageSrc: redeyestee,
    imageAlt: "Red Eyes Tee",
    price: "$35",
    color: "Black",
    description: "Red Eye Pupil T-shirt",
  },
  {
    id: 7,
    name: "Purple Cat Tee",
    href: "#",
    imageSrc: purplecat,
    imageAlt: "Purple Cat Tee",
    price: "$35",
    color: "Black",
    description: "Comfortable T-shirt With 3-Eyed Cat Print",
  },
  {
    id: 7,
    name: "Radiohead Tee",
    href: "#",
    imageSrc: radiohead,
    imageAlt: "Radiohead Tee",
    price: "$35",
    color: "Black",
    description: "Rock Band Radio Head Digital Print Short-Sleeved T-Shirt",
  },

  // More products...
];

export default function Products() {
  return (
    <div className="bg-product font-bellerose">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl tracking-tight text-white font-brodies imagenlogo">
          Check out the new tees
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 navletter">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border border-white bg-black rounded"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <p className="inline-flex flex-row justify-center items-center gap-2 rounded bg-black text-yellow-500 font-brodies">
                Brand New!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </p>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-m text-white">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                    <br />
                    <p>{product.description}</p>
                  </h3>
                  <p className="mt-1 text-m text-white">{product.color}</p>
                </div>
                <p className="text-2xl font-medium text-white ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
