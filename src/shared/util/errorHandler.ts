import axios from "axios";

const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error(error.response?.data.message);
  } else {
    console.error(error);
  }
};

export default errorHandler;
