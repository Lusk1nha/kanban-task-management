import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
`

export const RemoveItemButton = styled.button`
  background: transparent;

  max-width: 2.5rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  cursor: pointer;
  user-select: none;
`