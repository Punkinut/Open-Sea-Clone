import toast from "react-hot-toast";

const welcomeUser = (userName, toastHandler = toast) => {
  toastHandler.success(
    `Welcome Back ${userName !== "Unnamed" ? `${userName}` : ""}`,
    { style: { background: "#04111d", color: "#fff" } }
  );
};

export default welcomeUser;
