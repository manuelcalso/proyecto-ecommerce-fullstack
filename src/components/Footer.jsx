import footerbg from "./../assets/footer1280x1024.jpg";
const links = [
  { name: "About us", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
  { name: "Work with us", href: "#" },
];

export default function Footer(props) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-2 sm:py-3 navletter">
      <img
        src={footerbg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl text-white sm:text-4xl font-brodies">
            Wear the Rhythm...
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none font-bellerose">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 items-center">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
            <div className="flex lg:flex-1 mx-2.5 justify-center">
              <a href="#">
                <img
                  className=" imagenlogo h-24 w-24 rounded-full bg-white"
                  src={props.imagenlogo}
                  alt="gorillaz logo"
                />
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
