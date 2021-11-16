import styled from "@emotion/styled";
import { ScreenContainer } from "components/lib";
import { Kanban } from "types/kanban";
import { useDocumentTitle } from "utils";
import { useKanbans } from "utils/kanban";
import { KanbanColumn } from "./kanban-column";
import { SearchPanel } from "./search-panel";
import { useKanbanSearchParams, useProjectInUrl } from "./util";

export const KanbanScreen = () => {
  useDocumentTitle("看板列表");

  const { data: currentProject } = useProjectInUrl();
  const { data: kanbans } = useKanbans(useKanbanSearchParams());
  return (
    <div>
      <ScreenContainer>
        <h1>{currentProject?.name}</h1>
        <SearchPanel />
        <ColumnsContainer>
          {kanbans?.map((kanban: Kanban) => (
            <KanbanColumn kanban={kanban} key={kanban.id} />
          ))}
        </ColumnsContainer>
      </ScreenContainer>
    </div>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-right: 2rem;
  flex: 1;
`;
