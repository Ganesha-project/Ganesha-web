export const ActivityLoader = () => {
    return (
      <div className="grid grid-cols-2 gap-4 animate-pulse">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-3xl w-full h-full aspect-square dark:bg-darkColor/30 bg-lightColor/30 shadow-mainShadow"
          ></div>
        ))}
      </div>
    );
  };
  