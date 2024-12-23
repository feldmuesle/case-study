import { useState } from 'react';
import styled from 'styled-components';
import { useGetSortedFileData } from '../hooks/useGetSortedFileData';
import { Sidebar } from './Sidebar';

export function FileView() {
  const data = useGetSortedFileData();
  const [activeItem, setActiveItem] = useState<string>('');

  console.log(data);

  return (
    <Wrapper>
      <Title>Home assignment</Title>
      <ContentWrapper>
        <Sidebar
          data={data ?? []}
          onActiveClick={setActiveItem}
          activeItem={activeItem}
        />
        <Content>awesome stuff to come</Content>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  line-height: 100px;
  margin: 0;
  padding-left: 40px;
  border-bottom: 1px solid #cecece;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 40px;
`;
