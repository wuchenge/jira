import { ReactNode } from "react";
import { AuthProvide } from "context/auth-context";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvide>{children}</AuthProvide>;
};
