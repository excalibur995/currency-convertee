import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MainProps } from "shared/entities";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
    },
  },
});

export default function ReactQueryConfig({ children }: MainProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
