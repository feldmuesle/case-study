import styled from 'styled-components';
import { FileDataItem } from '../hooks/useGetSortedFileData';

interface TreeItemProps {
  data: FileDataItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

export function TreeItem({ data, isActive, onClick }: TreeItemProps) {
  return (
    <StyledTreeItem onClick={() => onClick(data.id)} $isActive={isActive}>
      {data.name}
    </StyledTreeItem>
  );
}

const StyledTreeItem = styled.li<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? 'green' : 'pink')};
  cursor: pointer;
`;
