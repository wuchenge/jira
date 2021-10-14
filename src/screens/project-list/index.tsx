import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils/index";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 2000);
  const client = useHttp();
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};
