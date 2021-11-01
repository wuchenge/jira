import { ReactNode } from "react";
import { AuthProvide } from "context/auth-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "store";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvide>{children}</AuthProvide>;
      </QueryClientProvider>
    </Provider>
  );
};
