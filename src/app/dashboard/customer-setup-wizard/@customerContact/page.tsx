import React from "react";
import Guide from "@/app/dashboard/customer-setup-wizard/guide/Guide";
import Image from "next/image";

const CustomerContactCard = () => {
  return (
    <div className="border-l-2 py-6 px-8">
      <div className="pb-2 font-medium text-xl">Provide Customer Contact</div>
      <div className="flex justify-between gap-4 border-t py-8 ">
        <div className="flex-grow">
          <ContactDetailCard />
        </div>
        <Guide />
      </div>
    </div>
  );
};

export default CustomerContactCard;

const ContactDetailCard = () => {
  return (
    <div className="mx-auto bg-white p-3 rounded-md border flex items-center space-x-4 relative cursor-pointer transition ease-in-out hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.01] duration-200 ">
      <Image
        src="/next.svg"
        alt="User Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div className="flex flex-col">
        <div>
          <h2 className="text-lg font-normal">Jenny Doe</h2>
          <p className="text-sm text-gray">Head of Operations</p>
        </div>

        <div className="flex gap-6 font-normal text-gray mt-3">
          <div className="text-xs flex gap-1">
            <Image
              className="h-fit"
              src="/message.svg"
              alt="admin"
              width={20}
              height={30}
            />
            <div className="">Jenny@compasshealth.com</div>
          </div>

          <div className="text-xs flex gap-1">
            <Image
              className="h-fit"
              src="/telephone.svg"
              alt="admin"
              width={20}
              height={20}
            />
            786-931-9381
          </div>

          {/* You can replace the below div with an actual icon */}
          <div className="text-xs flex gap-1">
            <Image
              className="h-fit"
              src="/person.svg"
              alt="admin"
              width={20}
              height={20}
            />
            Admin
          </div>
        </div>
      </div>
      <p className="text-green-700 font-medium text-xs absolute right-4 top-4">
        Primary Customer Contact
      </p>
    </div>
  );
};
