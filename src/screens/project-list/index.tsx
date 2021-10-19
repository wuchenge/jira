import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState } from "react";
import { useDebounce, useDocumentTitle } from "utils/index";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";

export const ProjectListScreen = () => {
  useDocumentTitle("项目列表");
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
