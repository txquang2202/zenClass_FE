import React from "react";
import { Avatar } from "@material-ui/core";
import { useNotificationContext } from "../../context/NotificationContext";

function NotiPage(props) {
  const { menuItemsData } = useNotificationContext();
  return (
    <>
      <section className="feature pt-[34px] pb-[170px]">
        <div className="container w-max lg:max-w-[calc(100%-50rem)] mx-auto rounded-lg p-6 shadow-[0_4px_9px_-4px_#3b71ca]  ">
          <div className="flex justify-start">
            <h2 className="section-heading font-semibold text-3xl leading-[1.2] tracking-tight text-[#10375c]">
              Notifications
            </h2>
          </div>
          <hr className="text-gray-200 h-1 mt-6" />
          <div className="flex flex-col mt-[20px] space-y-1">
            {menuItemsData.map((item) => (
              <div
                key={item.id}
                className="flex rounded-lg  p-4 cursor-pointer hover:bg-gray-100"
              >
                <Avatar
                  alt={item.name}
                  src={item.avatarSrc}
                  className=" mt-1 h-12 w-12"
                />
                <div className="ml-3">
                  <span className="font-semibold">{item.name} </span>
                  <p
                    className="text-base inline"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.content}
                  </p>
                  <span className="text-[#10375c] font-bold text-sm block mt-2">
                    {item.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const menuItemsData = [
  {
    id: 1,
    name: "Duy",
    avatarSrc: "/static/images/avatar/1.jpg",
    content: "Reprehenderit quia neque error Ipsa laudantium molestias",
    timestamp: "1 month ago",
  },
  {
    id: 2,
    name: "Hieu",
    avatarSrc: "/static/images/avatar/1.jpg",
    content: "Reprehenderit quia neque error Ipsa laudantium molestias",
    timestamp: "1 month ago",
  },
  {
    id: 3,
    name: "Quang",
    avatarSrc: "/static/images/avatar/1.jpg",
    content: "Reprehenderit quia neque error Ipsa laudantium molestias",
    timestamp: "1 month ago",
  },
  {
    id: 4,
    name: "Quang",
    avatarSrc: "/static/images/avatar/1.jpg",
    content: "Reprehenderit quia neque error Ipsa laudantium molestias",
    timestamp: "1 month ago",
  },
  // Add more items as needed
];

export default NotiPage;
