import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FileDataItem } from '../hooks/useGetSortedFileData';
import { DataTree } from '../DataTree/DataTree';

interface TreeItemProps {
  data: FileDataItem;
  activeItems: string[];
  onClick: (id: string) => void;
}

export function TreeItem({ data, activeItems, onClick }: TreeItemProps) {
  const isFolder = data.type === 'folder';
  const isActive = activeItems.includes(data.id);

  return (
    <StyledTreeItem onClick={() => onClick(data.id)} $isActive={isActive}>
      {isFolder ? (
        <>
          <StyledFolderTitle>
            <FontAwesomeIcon icon={isActive ? faChevronDown : faChevronRight} />
            {data.name}
          </StyledFolderTitle>
          {isActive && (
            <DataTree
              data={data.children ?? []}
              onActiveClick={onClick}
              activeItems={activeItems}
            />
          )}
        </>
      ) : (
        <span>{data.name}</span>
      )}
    </StyledTreeItem>
  );
}

const StyledTreeItem = styled.li<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? '#5A5A5A' : '#A8A8A8')};
  cursor: pointer;
  list-style: none;
  line-height: 26px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledFolderTitle = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;
