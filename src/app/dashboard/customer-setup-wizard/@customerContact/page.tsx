import React from "react";
import Guide from "@/app/dashboard/customer-setup-wizard/guide/Guide";
import Image from "next/image";

const CustomerContactCard = () => {
  return (
    <div className="border-l-2 py-6 px-8 border-stroke-medium">
      <div className="pb-2 font-medium text-xl">Provide Customer Contact</div>
      <div className="flex justify-between gap-8 border-t py-8 border-stroke-medium">
        <div className="flex-grow">
          <ContactDetailCard />
          <div className="cursor-pointer text-primary-main">
            Add More Contacts
          </div>
        </div>
        <Guide />
      </div>
    </div>
  );
};

export default CustomerContactCard;

const ContactDetailCard = () => {
  return (
    <div className="mb-4 mx-auto bg-white p-3 rounded-md border border-stroke-medium flex items-center space-x-4 relative cursor-pointer transition ease-in-out hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-[1.01] duration-200 ">
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
          <p className="text-sm text-base-secondary b text-base-secondary">
            Head of Operations
          </p>
        </div>

        <div className="flex gap-6 font-normal text-base-secondary mt-3">
          <div className="text-xs flex gap-1">
            <Image src="/message.svg" alt="admin" width={20} height={20} />
            <div className="mt-1">Jenny@compasshealth.com</div>
          </div>

          <div className="text-xs flex gap-1">
            <Image src="/telephone.svg" alt="admin" width={20} height={20} />
            <div className="mt-1">786-931-9381</div>
          </div>

          {/* You can replace the below div with an actual icon */}
          <div className="text-xs flex gap-1">
            <Image src="/person.svg" alt="admin" width={20} height={20} />
            <div className="mt-1">Admin</div>
          </div>
        </div>
      </div>
      <span className="text-alert-positive-main font-medium text-xs absolute right-4 top-4">
        <div className="mt-1">Primary Customer Contact</div>
      </span>
    </div>
  );
};
