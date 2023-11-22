const Productcard = ({ product, key }) => {
  return (
    <>
      <div>
        <div
          key={key}
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
      </div>
    </>
  );
};

export default Productcard;
