type ButtonProps = {
  buttonType: string;
  devMode: boolean;
  children: React.ReactNode;
};

const Button = ({ buttonType, devMode, children }: ButtonProps) => {
  return devMode ? (
    <span className="block mt-[4px]">
      <button
        data-tooltip-target={`tooltip-right-${children}`}
        data-tooltip-placement="right"
        className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-[white] rounded-[5px] cursor-not-allowed ${
          buttonType === "secondary" ? "opacity-[80%]" : ""
        }`}
      >
        {children}
      </button>
      <div
        id={`tooltip-right-${children}`}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Not available in beta version.
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </span>
  ) : (
    <button
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-[white] rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[80%]" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
