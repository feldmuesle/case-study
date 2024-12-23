import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FileDataItem } from '../hooks/useGetSortedFileData';

interface DataTreeProps {
  data: FileDataItem[];
  activeItems: string[];
  onActiveClick: (ids: string[]) => void;
}

export function DataTree({ data, activeItems, onActiveClick }: DataTreeProps) {
  const toggleFolder = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    e.stopPropagation();
    const updated = activeItems.includes(id)
      ? activeItems.filter((item) => item !== id)
      : [...activeItems, id];
    onActiveClick(updated);
  };

  const renderFolders = (data: FileDataItem[]) => {
    return (
      <StyledDataTree>
        {data.map((folder) => {
          const isFolder = folder.type === 'folder';
          const isExpanded = activeItems.includes(folder.id);
          return (
            <StyledTreeItem
              key={folder.id}
              onClick={(e) => toggleFolder(e, folder.id)}
              $isActive={isExpanded}
            >
              <StyledFolderTitle>
                {isFolder && (
                  <FontAwesomeIcon
                    icon={isExpanded ? faChevronDown : faChevronRight}
                  />
                )}
                {folder.name}
              </StyledFolderTitle>
              {isFolder && isExpanded && renderFolders(folder?.children ?? [])}
            </StyledTreeItem>
          );
        })}
      </StyledDataTree>
    );
  };

  return <StyledDataTree>{renderFolders(data)}</StyledDataTree>;
}

const StyledDataTree = styled.ul`
  margin: 0;
  padding-inline-start: 20px;
`;

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
