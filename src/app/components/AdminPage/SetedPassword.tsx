
const completions = [
    { name: "امیر قنبری", status: "تکمیل شد" },
    { name: "مینا قنبری", status: "تکمیل شد" },
    { name: "نگین سعیدی", status: "تکمیل شد" },
    { name: "سهیلا ابراهیمی", status: "تکمیل شد" },
    { name: "فاطمه طالبیان", status: "تکمیل شد" },
    { name: "سکینه داوودی", status: "تکمیل شد" },
  ];
  
  export default function SetedPassword() {
    return (
      <div>
      <div className="">
      <div className="flex justify-center">
        <div className="bg-white shadow-lg mt-5 p-6 md:p-10 w-[97.5%] rounded-sm">
          {completions.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b last:border-b-0 py-9"
            >
              <span className="font-bold">{item.name}</span>
              <span>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    );
  }
  