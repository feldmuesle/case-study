import styled from 'styled-components';

export function FileTree({ children }: React.PropsWithChildren) {
  return <StyledDataTree>{children}</StyledDataTree>;
}

const StyledDataTree = styled.ul`
  margin: 0;
  padding-inline-start: 20px;
`;
