import { toast } from "react-hot-toast";

type toastProp = {
  background?: string;
  color?: string;
  type: "ERROR" | "SUCCESS";
  msg: string;
};

export const showToast = ({ type, msg, background, color }: toastProp) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: "top-center",
        style: {
          background: background || "#EDF8EC",
          color: color || "#357F2F",
          border: "1px solid #4CB54380",
          fontSize: "14px",
        },
      });
      break;

    case "ERROR":
      toast.error(msg, {
        position: "top-center",
        style: {
          background: background || "#FAE8EA",
          color: color || "#CF142B",
          border: "1px solid #993844",
          borderRadius: "16px",
        },
      });

      break;

    default:
      return;
  }
};

export const renderCardImage = (image: string[]) => {
  if (image?.length > 0) {
    return image[0];
  } else {
    return "/images/image_not_availble.png";
  }
};
