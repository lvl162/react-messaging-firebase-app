import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.img`
  width: ${({ size }) => size + 'px'};
  width: ${({ size }) => size + 'px'};
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  padding: ${({ padding }) => padding + 'px'};
  cursor: pointer;
`;
const Avatar = ({ size, padding, src, alt }) => {
  return (
    <AvatarWrapper
      size={size}
      padding={padding}
      src={src}
      alt={alt}
    ></AvatarWrapper>
  );
};

export default Avatar;
