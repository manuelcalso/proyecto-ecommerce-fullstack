import Productcard from "./Productcard";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$ 9",
  },
  {
    id: 2,
    name: "Lila Calavera  Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/lilacalavera_iqpogf.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$ 15",

    description: "Lila t-shirt painting with a skull and flowers.",
  },
  {
    id: 3,
    name: "Berserk Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/berserker_znwwwm.jpg",
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$ 15",

    description: "Unisex T-shirt with Anime Print.",
  },
  {
    id: 4,
    name: "Chilanga Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/lachilanga_fy2jgq.webp",
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$ 15",
    description: "The chilanga",
  },
  {
    id: 5,
    name: "Vintage Skull Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/vintagecalaverayflores_ewirdw.jpg",
    imageAlt: "Unisex T-shirt with Anime Print.",
    price: "$ 15",
    description: "Vintage Men's Cotton T-shirt with Skulls and Flowers",
  },
  {
    id: 6,
    name: "Red Eyes Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/ojosrojos_enrc7f.webp",
    imageAlt: "Red Eyes Tee",
    price: "$ 15",

    description: "Red Eye Pupil T-shirt",
  },
  {
    id: 7,
    name: "Purple Cat Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/gatomorado_ryy6dh.webp",
    imageAlt: "Purple Cat Tee",
    price: "$ 20",

    description: "Comfortable T-shirt With 3-Eyed Cat Print",
  },
  {
    id: 8,
    name: "Radiohead Tee",
    href: "#",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/radiohead_t2tewf.webp",
    imageAlt: "Radiohead Tee",
    price: "$ 15",

    description: "Rock Band Radio Head Digital Print Short-Sleeved T-Shirt",
  },

  // More products...
];

export default function Products() {
  return (
    <div className="bg-product font-brodies ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl tracking-tight imagenlogo">
          <p className="flex flex-row justify-center items-center gap-3 text-yellow-300  py-1 bg-black rounded-full">
            Check out the NEW tees!
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
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 navletter">
          {products.map((product) => (
            <Productcard key={product.id} product={product}></Productcard>
          ))}
        </div>
      </div>
    </div>
  );
}
