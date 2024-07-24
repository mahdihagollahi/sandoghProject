
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
      <div className="flex justify-center">
        <div className="w-full max-w-3xl border border-gray-300 rounded-lg p-4">
          {completions.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b last:border-b-0 py-2"
            >
              <span>{item.status}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  