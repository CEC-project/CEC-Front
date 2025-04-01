import { FadeLoader } from "react-spinners";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-screen h-screen z-50 fixed">
      <div className="w-full h-full flex-align-center">
        <FadeLoader
          color="#fad103"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
