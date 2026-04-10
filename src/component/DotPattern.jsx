import React from "react";

const DotPattern = ({ count = 30, className = "" }) => {
  return (
    <div className={`grid gap-1.5 ${className}`} style={{ 
      gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(count))}, minmax(0, 1fr))` 
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="w-0.75 h-0.75 bg-[#ABB2BF]" />
      ))}
    </div>
  );
};

export default React.memo(DotPattern);
