import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FileDataItem } from '../hooks/useGetSortedFileData';
import { FileItem } from './FileItem';
import { FileTree } from './FileTree';
import { MouseEvent, useEffect, useState } from 'react';

interface FolderItemProps {
  item: FileDataItem;
  onClick: (path: string[]) => void;
  selectedPath: string[];
  parentPath?: string[];
}

export function FolderItem({
  item,
  onClick,
  selectedPath,
  parentPath = [],
}: FolderItemProps) {
  const isActive = selectedPath.includes(item.id);
  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    if (!isExpanded) {
      setIsExpanded(isActive);
    }
  }, [isActive]);

  const handleItemClick = (
    e: MouseEvent<HTMLLIElement>,
    clickedItem: FileDataItem,
    path: string[]
  ) => {
    e.stopPropagation();
    const isFolder = clickedItem.type === 'folder';

    if (isFolder) {
      setIsExpanded((prevState) => !prevState);
    }

    onClick([...path, clickedItem.id]);
  };

  const renderFolders = (data: FileDataItem[], path: string[]) => {
    return (
      <FileTree>
        {data.map((item) => {
          const isFolder = item.type === 'folder';
          return isFolder ? (
            <FolderItem
              onClick={onClick}
              selectedPath={selectedPath}
              parentPath={path}
              item={item}
              key={item.id}
            />
          ) : (
            <FileItem
              key={item.id}
              isActive={selectedPath.includes(item.id)}
              onClick={(e) => handleItemClick(e, item, path)}
            >
              <span>{item.name}</span>
            </FileItem>
          );
        })}
      </FileTree>
    );
  };

  return (
    <FileItem
      onClick={(e) => handleItemClick(e, item, [...parentPath, item.id])}
      isActive={isActive}
    >
      <StyledFolderTitle>
        <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} />
        {item.name}
      </StyledFolderTitle>
      {isExpanded &&
        renderFolders(item?.children ?? [], [...parentPath, item.id])}
    </FileItem>
  );
}

const StyledFolderTitle = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;
