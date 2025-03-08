const Header = ({ title }) => (
  <div>
    <p
      className="border-b-4 w-full border-second-color pb-5 text-center text-2xl font-bold text-main-text--color sm:text-4xl lg:text-right xl:text-5xl"
      style={{
        lineHeight: "1.5",
      }}
    >
      {title}
    </p>
  </div>
);

export default Header;
