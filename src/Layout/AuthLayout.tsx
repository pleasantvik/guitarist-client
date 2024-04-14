import { ReactNode } from "react";
import Header from "./components/Header";

const AuthLayout = ({ children, label, text }: Props) => {
  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-main to-primary-main-light">
        <div className="relative -top-[7vh] bg-white z-10  py-[32px] px-[40px] w-[440px] filter rounded-[12px]">
          <div className=" text-center flex flex-col items-center mb-9">
            {/* <Link to={"/signin"} className="w-max mb-6">
            <Logo className="w-full max-w-[169.333px]" />
          </Link> */}
            <p className="mb-2 text-gray-800 font-[600] tracking-tight ">
              {label}
            </p>
            <p className="text-gray-400 text-[14px]">{text}</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
};

type Props = {
  children: ReactNode;
  label?: string;
  text?: string;
};
export default AuthLayout;
