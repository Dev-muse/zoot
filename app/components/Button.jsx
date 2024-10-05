import clsx from "clsx";
import React from "react";
import Marker from "@/app/components/Marker";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  markerFill,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span
        className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100
        overflow-hidden"
      >
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 z-10 object-contain"
          />
        )}
        <span
          className="relative z-2 font-poppins base-bold text-p1
        uppercase "
        >
          {children}
        </span>
      </span>
      <span className="glow-before glow-after"></span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </button>
  );
};

export default Button;
