import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #222425;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0.4em 1em;
`;
export const MyInfo = styled.div`
  display: flex;
  align-items: inherit;
  height: 2em;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  padding-left: 0.2em;
`;
export const Link = styled.a`
  text-decoration: none;
  margin: 0 0.1em;
  cursor: pointer;
  color: #fff;
  & svg {
    width: fit-content;
    height: 2.5vh;
  }
  &:hover {
    color: #ea1a30;
    & svg path {
      fill: #ea1a30;
    }
  }
`;
