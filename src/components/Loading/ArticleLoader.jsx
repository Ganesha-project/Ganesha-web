export const ArticleLoader = () => {
    return (
      <div className="grid grid-cols-1 gap-4 animate-pulse">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-3xl w-full h-[60px] dark:bg-darkColor/30 bg-lightColor/30 shadow-mainShadow"
          ></div>
        ))}
      </div>
    );
  };
  