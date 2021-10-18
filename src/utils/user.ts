import { useEffect } from "react";
import { useAsync } from "./use-async";
import { User } from "screens/project-list/search-panel";
import { cleanObject } from "./index";
import { useHttp } from "./http";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]); // eslint-disable-line

  return result;
};
