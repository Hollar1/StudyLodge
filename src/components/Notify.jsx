import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Notify = ({ title, message, type }) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: { duration: 5000, onScreen: true },
  });
};

export default Notify;