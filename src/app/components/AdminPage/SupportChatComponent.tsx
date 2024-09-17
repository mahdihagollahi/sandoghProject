import React, { useState } from "react";
import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import defultUser from "@/src/app/assent/Img/adminPanel/defultUser.png";
import arrowImage from "@/src/app/assent/Img/adminPanel/back.svg";

interface Message {
  id: number;
  description: string;
  status: "read" | "unread";
  
}

interface User {
  id: number;
  first_name: string | null;
  last_name: string | null;
  phone_number: string;
  media: string[]; 
}

interface FetchMessagesResponse {
  ticket: {
    current_page: number;
    data: Message[];
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    total: number;
  };
  user: User;
}

const QueryClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const SupportChatComponent: React.FC = () => {
  const pathname = usePathname();
  const [ticket, setTicket] = useState<{ current_page: number; data: Message[] } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null); 
  const [userImage, setUserImage] = useState<string | null>(null); 
  const [userName, setUserName] = useState<string>("Unknown User"); 

  const authToken = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  const fetchMessages = async (): Promise<Message[]> => {
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

    const ticket = response.data.ticket;
    const user = response.data.user;

    setUserId(response.data.user.id); 
 setUserImage(user.media.length > 0 ? user.media[0] : defultUser); 
    setUserName(user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : "Unknown User");
    setTicket(ticket);
    return ticket.data;
  };

  const { data, isLoading, error } = useQuery("messages", fetchMessages, {
    enabled: !!authToken,
    onSuccess: (messages) => {
      setMessages(messages);
    },
  });

  const sendMessage = async (messageDescription: string) => {
    const pathParts = pathname?.split("/");
    const idFromPath = pathParts?.find((part) => /^\d+$/.test(part));

    if (!idFromPath || userId === null) {
      throw new Error("No ticket ID or user ID found");
    }

    const response = await axios.post("https://mohammadelia30.ir/shabab/api/messages/create/admin", 
      {
        user_id: userId, 
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

  if (error) return (
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
            <p>Error fetching messages</p>
          </div>
        </div>

        <div className="p-4 h-[40%] overflow-y-auto">
 
        </div>
      </div>
    </div>
  );

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
              src={userImage || defultUser}
              width={40}
              height={40}
              alt="user"
              className="rounded-full"
            />
            <div className="text-right">
              <p className="font-bold text-[#003B33]">{userName}</p>
            </div>
          </div>

          <div className="p-4 h-[80%] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.status === "unread" ? "justify-start" : "justify-end"}`}
              >
                <p
                  className={`p-3 rounded-lg inline-block max-w-4/5 ${message.status === "unread" ? "bg-gray-100" : "bg-[#4FD1C50D]"}`}
                >
                  {message.description || "No description"}
                </p>
              </div>
            ))}
          </div>

          <div className="flex px-9 ">
            <div className="flex items-center border border-[#F0F0F0] rounded-full px-2 py-3 w-[280%]">
              <input
                type="text"
                placeholder="تایپ کنید"
                className="flex-grow border-none outline-none p-2 px-6 text-right"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-[#00A991] text-white py-2 px-4 rounded-full"
                onClick={handleSend}
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

const App = () => (
  <QueryClientWrapper>
    <SupportChatComponent />
  </QueryClientWrapper>
);

export default App;