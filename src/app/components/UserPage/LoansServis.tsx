
import axios from "axios";


export const fetchLoanDetails = async (token) => {
  try {
    const response = await axios.get(
      "https://fundcharitynet.com/api/loans/loanDetails",
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
      "https://fundcharitynet.com/api/loans/show/guarantors",
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