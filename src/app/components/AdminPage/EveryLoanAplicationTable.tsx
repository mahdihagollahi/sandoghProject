import React, { useState } from "react";
import Image from "next/image";
import RejectIcon from "@/src/app/assent/Img/adminPanel/RejectCross.svg";
import AcceptIcon from "@/src/app/assent/Img/adminPanel/AcceptTik.svg";
import Paginate from "./Paginate";
import ModalAcceptLoans from "./ModalAcceptLoans";
import ModalRejectLoans from "./ModalRejectLoans";

interface User {
  id: number;
  name: string;
  requestNumber: number;
  amount: number;
  date: string;
  description: string;
  guarantors: string[];
  type: string;
  installment_count: number;
  loan_price: number;
}

interface UserTableProps {
  users?: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState<boolean>(false);
  const [selectedLoan, setSelectedLoan] = useState<User | null>(null);
  const itemsPerPage = 7;

  const handleAcceptClick = (loan: User) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };

  const handleRejectClick = (loan: User) => {
    setSelectedLoan(loan);
    setIsRejectModalOpen(true);
  };

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <div className="pl-10">
        <div className="max-w-full bg-white rounded-md shadow-md overflow-hidden p-10 dark:bg-[#4F5D74] dark:text-white">
          <table className="min-w-full">
            <thead>
              <tr className="w-full">
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  نام کاربر
                </th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
                  شماره درخواست
                </th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  مبلغ وام
                </th>
                <th className="py-2 pb-4 pt-2 border-b xl:whitespace-nowrap border-opacity-80 border-[#0000001A]">
                  تاریخ درخواست
                </th>
                <th className="py-2 pb-4 pt-2 border-b border-opacity-80 border-[#0000001A]">
                  توضیحات
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="text-center">
                    <td className="py-2 px-10 xl:whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="py-10 px-10 xl:whitespace-nowrap">
                      درخواست {row.requestNumber}
                    </td>
                    <td className="py-2 px-10 xl:whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td className="py-2 px-10">{row.date}</td>
                    <td className="py-2 px-10 xl:whitespace-break-spaces">
                      {row.description}
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td
                      colSpan={5}
                      className="py-2 px-4 border-b border-opacity-80 border-[#0000001A]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-bold">ضامن‌ها:</span>
                          <span className="border border-opacity-90 mr-2 border-[#4FD1C5] px-2 py-2 rounded-md">
                            {row.guarantors.length > 0
                              ? row.guarantors.join(", ")
                              : null}
                          </span>
                        </div>
                        <div>
                          <span className="font-bold">
                            نوع درخواست: {row.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#000000] text-black font-bold rounded-md px-5 py-2"
                            onClick={() => handleRejectClick(row)} // Open the reject modal
                          >
                            <Image
                              src={RejectIcon}
                              width={24}
                              height={24}
                              alt="RejectIcon"
                            />
                            رد
                          </button>
                          <button
                            className="flex gap-3 items-center border-2 border-opacity-80 border-[#4FD1C5] text-[#4FD1C5] rounded-md px-3 py-2"
                            onClick={() => handleAcceptClick(row)}
                          >
                            <Image
                              src={AcceptIcon}
                              width={24}
                              height={24}
                              alt="AcceptIcon"
                            />
                            <span>تایید</span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate
        currentPageData={currentPageData}
        pageCount={pageCount}
        pageClick={pageClick}
      />
      {isModalOpen && (
        <ModalAcceptLoans
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedLoan={selectedLoan}
          userId={selectedLoan?.id.toString() || ""} 
        />
      )}
      {isRejectModalOpen && (
        <ModalRejectLoans
          userId={selectedLoan?.id.toString() || ""}
          onClose={() => setIsRejectModalOpen(false)}
          onSend={(message) => {
            console.log(
              `Rejected Loan ID: ${selectedLoan?.id}, Message: ${message}`
            );
          }}
        />
      )}
    </div>
  );
};

export default UserTable;
