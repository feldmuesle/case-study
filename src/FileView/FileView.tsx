import { useState } from 'react';
import styled from 'styled-components';
import { useGetSortedFileData } from '../hooks/useGetSortedFileData';

export function FileView() {
  const data = useGetSortedFileData();
  const [activeItem, setActiveItem] = useState<string>('');

  console.log(data);

  return (
    <Wrapper>
      <Title>Home assignment</Title>
      <ContentWrapper>
        <Sidebar>tree items to come</Sidebar>
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

const Sidebar = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #cecece;
  padding: 20px;
`;
