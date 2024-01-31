import React from "react";
import { Card, CardContent, CardHeader, Avatar,Typography, Link,
} from "@mui/material";
import Image from "next/image";

const ProfileCard = () => {
  const iconsData = [
    { icon: "/Setting.svg", iconDetail: "Setting" },
    { icon:"/feedback.svg", iconDetail: "Give Feedback" },
    { icon: "/Help.svg", iconDetail: "Help" },
    { icon: "/Tour.svg", iconDetail: "Take a Quick Tour" },
  ];

  return (
    <Card className=" shadow-3xl w-72 h-auto  font-sans">
      {/* Card Header with Avatar Name, and Designation */}
      <CardHeader
        className="mt-3 "
        avatar={<Avatar src="path_to_profile_image.jpg" alt="Profile Image" className="w-13 h-13 " />}
        title={
          <Typography variant="h6" className="text-large    ">
            {/* {title} */}Amberly Buchholz
          </Typography>
        }
        subheader={
          <div>
            <Typography variant="body2" color="text.secondary text-sm w-40 mb-5">
              Director
            </Typography>
            {/* Manage Your Account Link */}
            <Typography  variant="caption" color="primary text-sm w-40">
              <Link href="/manage-account">
                <Typography className=" pt-2">Manage Your Account</Typography>
              </Link>
            </Typography>
          </div>
        }
      />
      <hr  className="w-4/5 mt-4 mb-4 mx-auto border-t-1 border-gray-300" />

      <CardContent>
        <div>
          {iconsData.map((item, index) => (
            <div key={index} className="flex items-center  gap-2 h-10 mb-2">
              <Image className="mr-2 "src={item.icon} height={18} width={18} />
              <span>{item.iconDetail}</span>
            </div>
          ))}
        </div>
        <hr className=" my-3 " />
        <div className="flex items-center  gap-2 h-10 mb-2">
              <Image className="mr-2 " src='/SignOut.svg'height={18} width={18} alt=''/>
              <span>Sign Out</span>
            </div>

      </CardContent>
    </Card>
  );
};

export default ProfileCard;
