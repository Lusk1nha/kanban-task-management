import styled from "styled-components";

type ContainerProps = {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #00000080;

  width: 100%;
  height: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;

  display: none;

  mix-blend-mode: normal;

  z-index: 1000;

  transition: unset;

  ${(({ active }) => active && `
    display: flex;
  `)}
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;

  padding: 1rem 1.5rem;
`