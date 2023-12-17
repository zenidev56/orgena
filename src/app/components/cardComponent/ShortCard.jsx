import React from "react";

import Image from "next/image";

const ShortCard = ({ feature: { url, title, description } }) => {
  console.log({ url });
  return (
    <div>
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4">
        <div className="w-1/3 flex justify-center items-center p-4 md:p-4">
          <div className="choose-img-container">
            <Image src={url} alt="features img" />
          </div>
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
