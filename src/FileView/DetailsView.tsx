import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile, faImage } from '@fortawesome/free-solid-svg-icons';
import { FileDataItem, FileDataType } from '../hooks/useGetSortedFileData';

interface DetailsViewProps {
  data?: FileDataItem;
  onClick: (path: string[]) => void;
  selectedPath: string[];
}

export function DetailsView({ data, onClick, selectedPath }: DetailsViewProps) {
  if (!data) return null;

  return data.children ? (
    <StyledDetails>
      {data.children.map((child) => (
        <Thumbnail
          key={child.id}
          name={child.name}
          type={child.type}
          onClick={() => onClick([...selectedPath, child.id])}
        />
      ))}
    </StyledDetails>
  ) : (
    <div>
      <h3>Preview</h3>
      <StyledDetail>
        <span>name: {data.name}</span>
        <span>type: {data.type}</span>
      </StyledDetail>
    </div>
  );
}

function Thumbnail({
  name,
  type,
  onClick,
}: {
  name: string;
  type: FileDataType;
  onClick: () => void;
}) {
  return (
    <StyledThumbnail onClick={onClick}>
      {type === 'doc' && <FontAwesomeIcon icon={faFile} />}
      {type === 'folder' && <FontAwesomeIcon icon={faFolder} />}
      {type === 'image' && <FontAwesomeIcon icon={faImage} />}
      <span>{name}</span>
    </StyledThumbnail>
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
`;

const StyledThumbnail = styled.div`
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
