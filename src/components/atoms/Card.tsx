import { MainProps } from "shared/entities";

export const Card = ({ children }: MainProps) => {
  return (
    <div className="rounded-xl border border-border">
      <div
        className="flex h-full w-full gap-2 rounded-xl 
        bg-gray-900 bg-opacity-0 bg-clip-padding p-4 backdrop-blur-3xl backdrop-filter"
      >
        {children}
      </div>
    </div>
  );
};
