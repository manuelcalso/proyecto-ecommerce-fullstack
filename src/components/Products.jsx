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
  },
  {
    id: 2,
    name: "Lila Calavera  Tee",
    href: "#",
    imageSrc: lilacalavera,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$40",

    description: "Lila t-shirt painting with a skull and flowers.",
  },
  {
    id: 3,
    name: "Berserk Tee",
    href: "#",
    imageSrc: berserkerimg,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$40",

    description: "Unisex T-shirt with Anime Print.",
  },
  {
    id: 4,
    name: "Chilanga Tee",
    href: "#",
    imageSrc: lachilanga,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$40",

    description: "The chilanga",
  },
  {
    id: 5,
    name: "Vintage Skull Tee",
    href: "#",
    imageSrc: vintageskull,
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$35",

    description: "Vintage Men's Cotton T-shirt with Skulls and Flowers",
  },
  {
    id: 6,
    name: "Red Eyes Tee",
    href: "#",
    imageSrc: redeyestee,
    imageAlt: "Red Eyes Tee",
    price: "$35",

    description: "Red Eye Pupil T-shirt",
  },
  {
    id: 7,
    name: "Purple Cat Tee",
    href: "#",
    imageSrc: purplecat,
    imageAlt: "Purple Cat Tee",
    price: "$35",

    description: "Comfortable T-shirt With 3-Eyed Cat Print",
  },
  {
    id: 7,
    name: "Radiohead Tee",
    href: "#",
    imageSrc: radiohead,
    imageAlt: "Radiohead Tee",
    price: "$35",

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
              className="group relative bg-black rounded flex-col"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <p className="flex flex-row justify-center items-center gap-2 bg-black text-yellow-500 font-brodies  py-1">
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
              <div className=" flex flex-row  justify-around  h-fit">
                <div>
                  <h3 className="text-m text-white flex-row py-8 px-0 ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                    <br />
                    <p>{product.description}</p>
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center px-5">
                  <p className="text-2xl font-medium py-2 ">{product.price}</p>
                  <button className=" rounded py-2 px-2 h-16 w-20 text-m bold text-white bg-purple-900 ">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
