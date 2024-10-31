
import axios from "axios";


export const fetchLoanDetails = async (token) => {
  try {
    const response = await axios.get(
<<<<<<< HEAD
      "https://mohammadelia30.ir/shabab/api/loans/loanDetails",
=======
      "https://fundcharitynet.com/api/loans/loanDetails",
>>>>>>> 2dd083d3a3342f7576667ba821beb54123bea097
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error("خطا در دریافت جزئیات وام:", error);
    throw error;
  }
};


export const searchGuarantor = async (token, nationalCode) => {
  try {
    const response = await axios.post(
<<<<<<< HEAD
      "https://mohammadelia30.ir/shabab/api/loans/show/guarantors",
=======
      "https://fundcharitynet.com/api/loans/show/guarantors",
>>>>>>> 2dd083d3a3342f7576667ba821beb54123bea097
      { national_code: nationalCode },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.guarantors || [];
  } catch (error) {
    console.error("خطا در جستجوی ضامن:", error);
    throw error;
  }
};


export const submitLoanRequest = async (token, loanRequest) => {
  try {
    const response = await axios.post(
      "https://mohammadelia30.ir/shabab/api/loans/store",
      {
        price: loanRequest.price,
        user_description: loanRequest.user_description,
        type: loanRequest.type,
        guarantors_id: loanRequest.guarantors_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("خطا در ثبت درخواست وام:", error);
    throw error;
  }
};