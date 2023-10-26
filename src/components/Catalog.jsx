import calaveraverano from "./../assets/products/calaveraverano.webp";
import girasolardiente from "./../assets/products/girasolardiente.webp";
import mtv from "./../assets/products/mtv.webp";
import greenastronaut from "./../assets/products/greenastronaut.webp";
import monalisa from "./../assets/products/monalisa.webp";
import girlman from "./../assets/products/girlman.webp";
import jaguar from "./../assets/products/jaguar.webp";
import pattern from "./../assets/products/pattern.webp";

import video4 from "./../assets/videos/pexels2.mp4";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Summer Skull",
    href: "#",
    price: "$48",
    imageSrc: calaveraverano,
    imageAlt: "Summer Skull",
    description: "Skull print short sleeve round neck T-shirt",
  },
  {
    id: 2,
    name: "Fiery Sunflower",
    href: "#",
    price: "$35",
    imageSrc: girasolardiente,
    imageAlt: "Fiery Sunflower",
    description: "Men's fashion cotton T-shirt with burning sunflower print",
  },
  {
    id: 3,
    name: "MTV tee",
    href: "#",
    price: "$89",
    imageSrc: mtv,
    imageAlt: "MTV tee",
    description: "T-shirt with 'Music Television' Print for men",
  },
  {
    id: 4,
    name: "Green Astronaut",
    href: "#",
    price: "$35",
    imageSrc: greenastronaut,
    imageAlt: "Green Astronaut",
    description: "Short sleeve T-shirt with creative astronaut print",
  },
  {
    id: 5,
    name: "Mona Lisa",
    href: "#",
    price: "$35",
    imageSrc: monalisa,
    imageAlt: "Mona Lisa",
    description: "T-shirt with modified print 'Mona Lisa' T-shirts for men",
  },
  {
    id: 6,
    name: "Gilman Brewing",
    href: "#",
    price: "$35",
    imageSrc: girlman,
    imageAlt: "Gilman Brewing",
    description: "Men's funny and stylish pattern printing T-shirt",
  },
  {
    id: 7,
    name: "Pattern Tee",
    href: "#",
    price: "$35",
    imageSrc: pattern,
    imageAlt: "Pattern Tee",
    description:
      "Men's stylish and comfortable geometric pattern print T-shirt,",
  },
  {
    id: 8,
    name: "Leopard Tee",
    href: "#",
    price: "$35",
    imageSrc: jaguar,
    imageAlt: "Leopard Tee",
    description: "Men's 3D Leopard digital printed T-shirts",
  },
  // More products...
];

export default function Catalog() {
  return (
    <div className="relative navletter ">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        playbackRate={0.5}
      >
        <source src={video4} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 font-brodies">
          {products.map((product) => (
            <div
              key={product.id}
              href={product.href}
              className="group rounded bg-black relative z-10"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-white">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-around items-center">
                <p className="mt-1 text-lg font-medium text-white">
                  {product.price}
                </p>
                <button className="rounded bg-purple-900 py-2 my-2 hover:bg-red-500">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
