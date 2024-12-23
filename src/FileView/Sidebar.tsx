import styled from 'styled-components';
import { FileDataItem } from '../hooks/useGetSortedFileData';
import { TreeItem } from '../TreeItem/TreeItem';

interface SidebarProps {
  data: FileDataItem[];
  activeItem: string;
  onActiveClick: (id: string) => void;
}

export function Sidebar({ data, activeItem, onActiveClick }: SidebarProps) {
  return (
    <StyledSidebar>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          data={item}
          onClick={onActiveClick}
          isActive={activeItem === item.id}
        />
      ))}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.ul`
  width: 300px;
  height: 100%;
  border-right: 1px solid #cecece;
  padding: 20px;
`;
