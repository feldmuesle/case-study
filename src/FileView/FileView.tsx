import { useState } from 'react';
import styled from 'styled-components';
import {
  FileDataItem,
  useGetSortedFileData,
} from '../hooks/useGetSortedFileData';
import { DetailsView } from './DetailsView';
import { FolderItem } from '../DataTree/FolderItem';

export function FileView() {
  const data = useGetSortedFileData();
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  const documents: FileDataItem = useMemo(
    () => ({
      name: 'Documents',
      id: 'root',
      type: 'folder',
      children: data,
    }),
    [data]
  );
  return (
    <Wrapper>
      <Title>Home assignment</Title>
      <ContentWrapper>
        <Sidebar>
          <FolderItem
            item={documents}
            onClick={setSelectedPath}
            selectedPath={selectedPath}
          />
        </Sidebar>
        <Content>
          <DetailsView data={focusData} />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Title = styled.h1`
  line-height: 100px;
  margin: 0;
  padding-left: 40px;
  border-bottom: 1px solid #cecece;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  padding: 20px 40px;
`;

const Sidebar = styled.div`
  overflow-y: auto;
  width: 300px;
  min-width: 300px;
  height: 100%;
  border-right: 1px solid #cecece;
  padding: 20px;
`;
