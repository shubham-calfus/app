import React from "react";

const Overview = () => {
  return (
    <div className="md:w-4/12 flex justify-center bg-black/60 text-white p-4">
      <div className="flex flex-col justify-center">
        {/* <iframe
          width="300"
          height="150"
          src="https://www.youtube.com/embed/c08yUtMzNSk?si=Rt4mr60kvadrJVKS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe> */}
        <div className="text-center">
          <div className="text-sm">
            Tradefull - a completed e-commerce solution
          </div>
          <div className="text-xs">
            Tradefull is a completed e-commerce solution that helps companies
            better manage their warehousing, fulfillment, shipping and
            logistics.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
