import React from "react";
import Button from "../components/Global_Component/Button";
import { BiLogOut } from "react-icons/bi";

const DashboardFooter = () => {
  return (
    <div className="w-screen p-1 px-2 fixed bottom-0 bg-beige-600 flex justify-between items-center">
      <div className="flex items-center gap-2 text-dark">
        Rights Reserved 2023
      </div>
      <div>
        <Button
          variant={"primary"}
          size={"default"}
          children={"Logout"}
          icon={true}
          Icon={<BiLogOut />}
        />
      </div>
    </div>
  );
};

export default DashboardFooter;
