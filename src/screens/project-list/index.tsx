import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils/index";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 1000);
  const client = useHttp();
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]); // eslint-disable-line

  useEffect(() => {
    client("users").then(setUsers);
  }, []); // eslint-disable-line

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
