import LoginForm from "../features/login/components/organisms/loginForm";

const Login: React.FC = () => {
  return (
    <div className="w-full h-fit min-h-screen flex relative">
      <section className="w-[100%] h-screen flex flex-col p-[80px] flex-align-center">
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
