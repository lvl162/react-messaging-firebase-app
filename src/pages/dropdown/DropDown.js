import React from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const DropDownItem = styled.li`
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding: 3px 5px;
  user-select: none;

  &:hover {
    transform: translateY(-2px);
    background: ${({ background }) => background};
  }
  &:hover:active {
    transform: translateY(1px);
    box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.35);
  }
`;
const DropDownHeading = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 1.6rem;
  transform: rotate(90deg);
  &:hover {
    border-radius: 3px;
    background-color: gray;
  }
`;
const DropDown = ({
  toggleDropDown,
  expand,
  handleDelete,
  turnOnUpdateMode,
  handleCancel,
}) => {
  return (
    <>
      <DropDownHeading onClick={toggleDropDown}>...</DropDownHeading>
      {expand && (
        <DropDownContainer>
          <DropDownItem background='green' onClick={turnOnUpdateMode}>
            Update
          </DropDownItem>
          <DropDownItem background='red' onClick={handleDelete}>
            Delete
          </DropDownItem>
          <DropDownItem background='gray' onClick={handleCancel}>
            Cancel
          </DropDownItem>
        </DropDownContainer>
      )}
    </>
  );
};

export default DropDown;
