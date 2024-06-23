import Button from "@/app/components/Global_Component/Button";
import React from "react";

const Test = () => {
  return (
    <div className="grid gap-4">
      <div>
        <h2>Buttons </h2>
        <div className="grid grid-cols-3 gap-4 divide-x-2">
          <div className="grid gap-2 place-items-center ">
            <Button children={"Default"} />
            <Button children={"Primary"} variant={"primary"} />
            <Button children={"Ghost"} variant={"ghost"} />
            <Button children={"Link"} variant={"link"} />
          </div>
          <div className="grid gap-2 place-items-center ">
            <Button children={"Default"} size={"sm"} />
            <Button children={"Primary"} variant={"primary"} size={"sm"} />
            <Button children={"Ghost"} variant={"ghost"} size={"sm"} />
            <Button children={"Link"} variant={"link"} size={"sm"} />
          </div>
          <div className="grid gap-2 place-items-center ">
            <Button children={"Default"} size={"lg"} />
            <Button children={"Primary"} variant={"primary"} size={"lg"} />
            <Button children={"Ghost"} variant={"ghost"} size={"lg"} />
            <Button children={"Link"} variant={"link"} size={"lg"} />
          </div>
        </div>
        <div>
          {/* <Button children={"Success"} />
          <Button children={"Danger"} />
          <Button children={"Warning"} />
          <Button children={"Info"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Test;
