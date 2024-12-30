import styled from 'styled-components';

export interface TreeItemProps {
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  isActive: boolean;
}

export function FileItem({
  onClick,
  isActive,
  children,
}: React.PropsWithChildren<TreeItemProps>) {
  return (
    <StyledFileItem onClick={onClick} $isActive={isActive}>
      {children}
    </StyledFileItem>
  );
}

const StyledFileItem = styled.li<{ $isActive?: boolean }>`
  color: ${(props) => (props.$isActive ? '#5A5A5A' : '#A8A8A8')};
  cursor: pointer;
  list-style: none;
  line-height: 26px;
  &:hover {
    background-color: #f5f5f5;
  }
`;
