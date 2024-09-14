
import React, { useState } from "react";
import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Image1 from "@/src/app/assent/Img/adminPanel/Avatar.svg";
import arrowImage from "@/src/app/assent/Img/adminPanel/back.svg";

interface Message {
  id: number;
  description: string;
  status: "read" | "unread";
}

interface Ticket {
  id: number;
  name: string;
  messages: Message[];
}

interface FetchMessagesResponse {
  ticket: Ticket;
}

const QueryClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const SupportChatComponent: React.FC = () => {
  const pathname = usePathname();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const authToken = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const fetchMessages = async (): Promise<Ticket> => {
    const pathParts = pathname?.split("/");
    const idFromPath = pathParts?.find((part) => /^\d+$/.test(part));

    if (!idFromPath) {
      throw new Error("No ticket ID found in the path");
    }

    const response = await axios.get<FetchMessagesResponse>(`https://mohammadelia30.ir/shabab/api/messages/index/${idFromPath}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    setTicket(response.data.ticket);
    return response.data.ticket;
  };

  const { data, isLoading, error } = useQuery("messages", fetchMessages, {
    enabled: !!authToken,
    onSuccess: (data) => {
      setMessages(data.messages);
    },
  });

  const sendMessage = async (messageDescription: string) => {
    const pathParts = pathname?.split("/");
    const idFromPath = pathParts?.find((part) => /^\d+$/.test(part));

    if (!idFromPath) {
      throw new Error("No ticket ID found in the path");
    }

    const response = await axios.post("https://mohammadelia30.ir/shabab/api/messages/create/admin", 
      {
        user_id: 12,
        type: "unsystematic",
        description: messageDescription,
      }, 
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return response.data.message;
  };

  const mutation = useMutation(sendMessage, {
    onSuccess: (newMessage) => {
      setMessages([
        ...messages,
        {
          id: newMessage.id,
          description: newMessage.description,
          status: newMessage.status,
        },
      ]);
      setNewMessage(""); 
    },
    onError: (error) => {
      console.error("Error sending message:", error);
    },
  });

  const handleSend = () => {
    if (newMessage.trim()) {
      mutation.mutate(newMessage);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  if (isLoading) return (
    <div>
    <div className="flex gap-[490px] justify-between items-center mb-2 mt-[5%]">
      <div className="mr-4">
        <p className="font-bold text-lg">پشتیبانی</p>
      </div>
      <div
        className="absolute flex mr-[66%] items-center cursor-pointer"
        onClick={handleBack}
      >
        بازگشت
        <Image src={arrowImage} width={38} height={38} alt="arrow" />
      </div>
    </div>

    <div>
      <div className="py-2 mt-5">
        <p className="font-bold">پیام های در انتظار پاسخگویی</p>
      </div>

      <div className="bg-white w-[1030px] h-[771px] shadow-md mt-5 px-14 py-2 pb-4 rounded-md">
        
          <div className="text-right">
            
          </div>
          <div className="flex justify-center items-center mt-96">
            <span className="loading loading-dots text-accent loading-lg"></span>
          </div>
        </div>

        <div className="p-4 h-[40%] overflow-y-auto">
         
       
      
      </div>
    </div>
  </div>
  );
  if (error) return(
    <div>
    <div className="flex gap-[500px] justify-between items-center mb-2 mt-[5%]">
      <div className="mr-4">
        <p className="font-bold text-lg">پشتیبانی</p>
      </div>
      <div
       className="absolute flex mr-[66%] items-center cursor-pointer"
        onClick={handleBack}
      >
        بازگشت
        <Image src={arrowImage} width={38} height={38} alt="arrow" />
      </div>
    </div>

    <div>
      <div className="py-2 mt-5">
        <p className="font-bold">پیام های در انتظار پاسخگویی</p>
      </div>

      <div className="bg-white w-[1030px] h-[771px] shadow-md mt-5 px-14 py-2 pb-4 rounded-md">
        
          <div className="text-right">
            
          </div>
          <div className="flex justify-center items-center mt-96">
          <p>Error fetching messages</p>;

          </div>
        </div>

        <div className="p-4 h-[40%] overflow-y-auto">
         
       
      
      </div>
    </div>
  </div>
  ) 
  const displayName = ticket?.name?.trim() ? ticket.name : "Unknown User";

  return (
    <div>
      <div className="flex gap-[460px] justify-between items-center mb-2 mt-[5%]">
        <div className="mr-4">
          <p className="font-bold text-lg">پشتیبانی</p>
        </div>
        <div
          className="absolute flex mr-[66%] items-center cursor-pointer"
          onClick={handleBack}
        >
          بازگشت
          <Image src={arrowImage} width={38} height={38} alt="arrow" />
        </div>
      </div>

      <div>
        <div className="py-2 mt-5">
          <p className="font-bold">پیام های در انتظار پاسخگویی</p>
        </div>

        <div className="bg-white w-[1030px] h-[771px] shadow-md mt-5 px-14 py-2 pb-4 rounded-md">
          <div className="flex w-[100%] mt-5 py-2 gap-4 items-start rounded-md bg-[#4FD1C50D] border-r-4 border-[#00A991]">
            <Image
              src={Image1}
              width={40}
              height={40}
              alt="user"
              className="rounded-full"
            />
            <div className="text-right">
              <p className="font-bold text-[#003B33]">{displayName}</p>
            </div>
          </div>

          <div className="p-4 h-[80%] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.status === "unread" ? "justify-start" : "justify-end"
                }`}
              >
                <p
                  className={`p-3 rounded-lg inline-block max-w-4/5 ${
                    message.status === "unread"
                      ? "bg-gray-100"
                      : "bg-[#4FD1C50D]"
                  }`}
                >
                  {message.description || "No description"}
                </p>
              </div>
            ))}
          </div>

          <div className="flex px-9 ">
            <div className="flex items-center border border-[#F0F0F0] rounded-full px-2 py-3 w-[200%]">
              <input
                type="text"
                placeholder="تایپ کنید"
                className="flex-grow border-none outline-none p-2 px-6 text-right"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-[#4FD1C5] rounded-md text-white px-4 py-2 ml-4"
                onClick={handleSend}
                disabled={mutation.isLoading}
              >
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppWithQueryClient: React.FC = () => {
  return (
    <QueryClientWrapper>
      <SupportChatComponent />
    </QueryClientWrapper>
  );
};

export default AppWithQueryClient;


