import Image from "next/image";
import RegisterImg from "@/public/image.png";
const RegistertionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="bg-backColor">
      <div className=" lg:hidden bg-black text-white  text-center flex items-center justify-center h-[72px]">
        <h1 className="text-4xl font-bold">Finance</h1>
      </div>
      <div className="flex wrapper  h-[calc(100vh-72px)]  lg:h-screen gap-4">
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute top-8 text-4xl font-bold p-4">
            <h1 className="text-white ">Finance</h1>
          </div>
          <div className="absolute text-white bottom-4 w-4/6 p-4">
            <h3 className="text-2xl font-bold mb-4">
              Keep track of your money and save for your future
            </h3>
            <p className="text-sm">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
          <Image
            src={RegisterImg}
            alt="Registertion Image"
            className="h-full rounded-lg"
          />
        </div>
        <div className="flex-1 flex items-center w-full justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};
export default RegistertionLayout;
