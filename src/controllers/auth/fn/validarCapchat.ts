import dotenv from "dotenv";
dotenv.config();

const { SECRETCAPCHAT, SECRETCAPCHAT_TRUE } = process.env;

const validarCapchat = async (captcha: string) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRETCAPCHAT}&response=${captcha}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const data = await response.json();

  return SECRETCAPCHAT_TRUE ? SECRETCAPCHAT_TRUE : data.success;
};

export default validarCapchat;
