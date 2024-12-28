import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faImage } from '@fortawesome/free-solid-svg-icons';
import { FileDataItem, FileDataType } from '../hooks/useGetSortedFileData';

interface DetailsViewProps {
  data?: FileDataItem;
  onClick: (path: string[]) => void;
  selectedPath: string[];
}

export function DetailsView({ data, onClick }: DetailsViewProps) {
  if (!data) return null;

  return data.children ? (
    <StyledDetails>
      {data.children.map((child) => (
        <Detail
          key={child.id}
          id={child.id}
          name={child.name}
          type={child.type}
          onClick={onClick}
        />
      ))}
    </StyledDetails>
  ) : (
    <StyledDetail onClick={() => onClick([data.id])}>
      <span>name: {data.name}</span>
      <span>type: {data.type}</span>
    </StyledDetail>
  );
}

function Detail({
  id,
  name,
  type,
  onClick,
}: {
  id: string;
  name: string;
  type: FileDataType;
  onClick: (path: string[]) => void;
}) {
  return (
    <StyledDetail onClick={(e) => onClick([id])}>
      {type === 'doc' && <FontAwesomeIcon icon={faFile} />}
      {type === 'folder' && <FontAwesomeIcon icon={faFolder} />}
      {type === 'image' && <FontAwesomeIcon icon={faImage} />}
      <span>{name}</span>
    </StyledDetail>
  );
}

const StyledDetails = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledDetail = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100px;
    text-align: center;
  }
`;
