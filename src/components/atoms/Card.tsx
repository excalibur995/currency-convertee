import { MainProps } from "shared/entities";

export const Card = ({ children }: MainProps) => {
  return (
    <div className="rounded-xl border border-border">
      <div className="flex gap-2 rounded-xl bg-primary p-4">{children}</div>
    </div>
  );
};
