import React, { useState } from "react";
import axios from "axios";

const ChangePasswordAdmin = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const authToken = localStorage.getItem("authToken");

    if (cardNumber.length < 16) {
      alert("شماره کارت باید 16 رقم باشد.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://fundcharitynet.com/api/settings/edit",
        { card_number: cardNumber },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Success:", response.data);
      alert("ارسال با موفقیت انجام شد!");
      setCardNumber(""); 
    } catch (error) {
      console.error("Error:", error);
      alert("خطایی در ارسال درخواست به وجود آمد.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = () => {
    document.documentElement.lang = "en";
  };

  const handleKeyPress = (e:any) => {
    if (document.documentElement.lang === "fa") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <p className="font-medium text-[#868686] dark:text-white text-base">
        شماره کارت را وارد کنید
      </p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={cardNumber}
          onFocus={handleFocus}
          onChange={(e) => setCardNumber(e.target.value)}
          onKeyPress={handleKeyPress} 
          className="bg-[#FBFCFB] dark:bg-[#4F5D74] px-4 w-60 h-10 mt-3 border border-[#DEDDDD] rounded-lg placeholder:text-[#ADADAD] placeholder:font-regular placeholder:text-sm"
          placeholder="0000-0000-0000-0000"
        />
        <button
          className="bg-[#4FD1C5] mt-3 text-white whitespace-nowrap w-14 py-2 px-3 rounded-md"
          onClick={handleSubmit}
          disabled={isSubmitting} 
        >
          {isSubmitting ? "در حال ارسال..." : "ثبت"}
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
