import { ReactNode } from "react";
import { AuthProvide } from "./auth-context.tsx";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvide>{children}</AuthProvide>;
};
