import { MainProps } from "../shared/entities";

const RootLayout = ({ children }: MainProps) => {
  return (
    <div className="relative">
      <div className="radial-background absolute inset-1" />
      <div className="mx-auto my-0 flex min-h-screen w-full max-w-1440 flex-col justify-start overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
