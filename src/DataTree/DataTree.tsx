import styled from 'styled-components';
import { FileDataItem } from '../hooks/useGetSortedFileData';
import { TreeItem } from '../TreeItem/TreeItem';

interface DataTreeProps {
  data: FileDataItem[];
  activeItems: string[];
  onActiveClick: (id: string) => void;
}

export function DataTree({ data, activeItems, onActiveClick }: DataTreeProps) {
  return (
    <StyledDataTree>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          data={item}
          onClick={onActiveClick}
          activeItems={activeItems}
        />
      ))}
    </StyledDataTree>
  );
}

const StyledDataTree = styled.ul`
  margin: 0;
  padding-inline-start: 20px;
`;
