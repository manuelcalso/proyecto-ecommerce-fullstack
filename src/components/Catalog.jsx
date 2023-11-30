import Productcard from "./Productcard";

const products = [
  {
    id: 1,
    name: "Summer Skull",
    href: "#",
    price: "$ 18",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587968/products%20ecommerce/calaveraverano_gm0phm.webp",
    imageAlt: "Summer Skull",
    description: "Skull print short sleeve round neck T-shirt",
  },
  {
    id: 2,
    name: "Fiery Sunflower",
    href: "#",
    price: "$ 15",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/girasolardiente_hai9pa.webp",
    imageAlt: "Fiery Sunflower",
    description: "Men's fashion cotton T-shirt with burning sunflower print",
  },
  {
    id: 3,
    name: "MTV tee",
    href: "#",
    price: "$ 19",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/mtv_yy0dbg.webp",
    imageAlt: "MTV tee",
    description: "T-shirt with 'Music Television' Print for men",
  },
  {
    id: 4,
    name: "Green Astronaut",
    href: "#",
    price: "$ 15",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/greenastronaut_s7hhzh.webp",
    imageAlt: "Green Astronaut",
    description: "Short sleeve T-shirt with creative astronaut print",
  },
  {
    id: 5,
    name: "Mona Lisa",
    href: "#",
    price: "$ 15",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/monalisa_f540xt.webp",
    imageAlt: "Mona Lisa",
    description: "T-shirt with modified print 'Mona Lisa' T-shirts for men",
  },
  {
    id: 6,
    name: "Gilman Brewing",
    href: "#",
    price: "$ 15",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/girlman_i0dcup.webp",
    imageAlt: "Gilman Brewing",
    description: "Men's funny and stylish pattern printing T-shirt",
  },
  {
    id: 7,
    name: "Pattern Tee",
    href: "#",
    price: "$ 5",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587964/products%20ecommerce/pattern_y76tlp.webp",
    imageAlt: "Pattern Tee",
    description:
      "Men's stylish and comfortable geometric pattern print T-shirt,",
  },
  {
    id: 8,
    name: "Leopard Tee",
    href: "#",
    price: "$ 10",
    imageSrc:
      "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700587963/products%20ecommerce/jaguar_cjgzgt.webp",
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
        <source
          src={
            "https://res.cloudinary.com/dgzghl0ur/video/upload/v1700674388/videos/pexels_d05v8s.mp4"
          }
          type="video/mp4"
        />
      </video>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 font-brodies">
          {products.map((product) => (
            <Productcard key={product.id} product={product}></Productcard>
          ))}
        </div>
      </div>
    </div>
  );
}
