import React from "react";

const DotPattern = ({ count = 30, className = "" }) => {
  return (
    <div
      className={`grid gap-1.5 max-w-full overflow-hidden ${className}`}
      style={
        className.includes("grid-cols-")
          ? {}
          : {
              gridTemplateColumns: `repeat(${Math.ceil(
                Math.sqrt(count)
              )}, minmax(0, 1fr))`,
            }
      }
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="block w-[3px] h-[3px] bg-[#ABB2BF]" />
      ))}
    </div>
  );
};

export default React.memo(DotPattern);