import { useState } from 'react';
import styled from 'styled-components';
import { useGetSortedFileData } from '../hooks/useGetSortedFileData';
import { DataTree } from '../DataTree/DataTree';
import { DetailsView } from './DetailsView';

export function FileView() {
  const data = useGetSortedFileData();
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const focusData = data?.find((items) => items.id === activeItems?.[0]);
  return (
    <Wrapper>
      <Title>Home assignment</Title>
      <ContentWrapper>
        <Sidebar>
          <DataTree
            data={data ?? []}
            onActiveClick={setActiveItems}
            activeItems={activeItems}
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
