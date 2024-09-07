import React from "react";
import UserTableFinancial from "@/src/app/components/AdminPage/UserTableNotDespositors";
import Image from "next/image";
import backImage from "@/src/app/assent/Img/adminPanel/back.svg";
import RoutTableFiancial from "./RoutTableFinancial";

interface User {
  id: number;
  name: string;
  joinDate: string;
  loans: string;
}

const users: User[] = [
  { id: 1, name: "امیر قنبری", joinDate: "1404/01/16", loans: "1 وام" },
  { id: 2, name: "مینا قنبری", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 3, name: "فاطمه طالبیان", joinDate: "1404/01/16", loans: "2 وام" },
  { id: 4, name: "نگین سعیدی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 5, name: "کنی سپهری", joinDate: "1404/01/16", loans: "2 وام" },
  { id: 6, name: "نگین سعیدی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 8, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 9, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 10, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 12, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 13, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 14, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
  { id: 15, name: "سکینه داوودی", joinDate: "1404/01/16", loans: "0 وام" },
];

const handleBack = () => {
  window.history.back();
};

const EveryUser: React.FC = () => {
  return (
    <div>
      <div className="flex gap-[74%]  items-center mb-2 mt-5 mr-3  ">
        <div className="mr-2 ">
          <p className="font-bold text-lg">مدیریت مالی</p>
        </div>

        <div
          className="flex justify-end mr-2 items-center cursor-pointer"
          onClick={handleBack}
        >
          بازگشت
          <Image src={backImage} width={38} height={38} alt="arrow" />
        </div>
      </div>
      <div>
        <RoutTableFiancial />
      </div>
      <UserTableFinancial users={users} />
    </div>
  );
};

export default EveryUser;
