"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles
import posetiv from "@/src/app/assent/Img/userPanel/posetiv.svg";
import negetiv from "@/src/app/assent/Img/userPanel/negtiv.svg";
import EditIcon from "@/src/app/assent/Img/adminPanel/EditIconn.svg";

function RuleAdmin() {
  const [counter, setCounter] = useState(0);
  const [vam, setVam] = useState(0);
  const [editorContent, setEditorContent] = useState("");

  function posetive() {
    setCounter(counter + 1);
  }
  function negtiv() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function vamposetive() {
    setVam(vam + 1);
  }
  function vamnegtiv() {
    if (vam > 0) {
      setVam(vam - 1);
    }
  }

  return (
    <>
      <div className="flex gap-[70%] items-center mb-2 mt-[50px]">
        <div className="mr-2">
          <p className="font-bold text-lg">تنظیمات</p>
        </div>
      </div>

      <div className=" px-5 py-10 mt-10 bg-white w-[113%] shadow-md rounded-md">
        <div className="flex  gap-40">
          <div>
            <div className="flex flex-row gap-9">
              <span>تعداد مجاز ضامن ها برای هر کاربر</span>
              <div className="flex flex-row gap-4">
                <Image onClick={() => posetive()} src={posetiv} alt="" />
                <span>{counter}</span>
                <Image onClick={() => negtiv()} src={negetiv} alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-9 mt-7">
              <span>تعداد وام های مجاز برای هر کاربر</span>
              <div className="flex flex-row gap-4">
                <Image onClick={() => vamposetive()} src={posetiv} alt="" />
                <span>{vam}</span>
                <Image onClick={() => vamnegtiv()} src={negetiv} alt="" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 mt-7">
              <span>مبلغ حق اشتراک را مشخص کنید</span>
              <input
                className="w-28 border-[1px] border-[#CACACA]  rounded-md p-2"
                type="number"
                placeholder="مبلغ به ریال"
              />
            </div>
            <div className="flex items-center gap-2 mt-7 mb-4">
              <Image src={EditIcon} width={24} height={24} alt="" />
              <p className="font-demiBold text-lg">قوانین ومقررات</p>
            </div>
          </div>

          <div>
            <p className="font-medium text-[#868686] text-base">
              شماره کارت را وارد کنید
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="bg-[#FBFCFB] px-4 w-60 h-10 mt-3 border border-[#DEDDDD] rounded-lg placeholder:text-[#ADADAD] placeholder:font-regular placeholder:text-sm
            "
                placeholder="0000-0000-0000-0000"
              />
              <button className="bg-[#4FD1C5] mt-3 text-white w-14 py-2 px-3 rounded-md">
                ثبت
              </button>
            </div>
            <div className="mt-8">
              <textarea
                name=""
                id=""
                className="w-96 h-20 bg-[#F9F9F9] rounded-lg px-2 py-4 placeholder:text-[#ADADAD] placeholder:font-medium"
                placeholder="متن یادآوری را بنویسید..."
              ></textarea>
            </div>
            <button className="bg-[#4FD1C5] mt-2 mb-3 text-white w-14 py-2 px-3 rounded-md">
              ارسال
            </button>
          </div>
        </div>

        <div className="p-5 border-[1px] border-slate-500 flex flex-col gap-8 ">
          <div>
            <div className="flex flex-col gap-4 mt-4">
              <span>ویرایش متن:</span>
              <ReactQuill
                value={editorContent}
                onChange={setEditorContent}
                placeholder="متن خود را وارد کنید..."
                className="border-[1px] border-[#CACACA] rounded-md"
              />
            </div>

            <div className="mt-4">
              <span className="font-bold">محتوای ثبت شده:</span>
              <div className="border p-4 rounded-md border-[#CACACA] mt-2">
                <div dangerouslySetInnerHTML={{ __html: editorContent }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#4FD1C5] text-white rounded-md p-4 w-[60%] mt-10 whitespace-nowrap">
        ثبت اطلاعات
      </button>
    </>
  );
}

export default RuleAdmin;
