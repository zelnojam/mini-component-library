import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Sizes = {
  small: {
    height: '24px',
    fontSize: 14 / 16 + 'rem',
  },
  large: {
    height: '36px',
    fontSize: 18 / 16 + 'rem',
    lineHeight: '1',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeStyle = Sizes[size];

  return (
    <Wrapper
      style={{
        '--input-width': width + 'px',
        '--size': sizeStyle.height,
      }}
    >
      <IconWrapper
        id={icon}
        size={size === 'small' ? 16 : 24}
        strokeWidth={size === 'large' && 2}
      />
      <TextInput
        placeholder={placeholder}
        style={{
          '--font-size': sizeStyle.fontSize,
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: inline-block;
  width: var(--input-width);
  height: var(--size);
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  left: 2px;
  top: 50%;
  transform: translate(0, -50%);
`;

const TextInput = styled.input`
  color: currentColor;
  padding: 0;
  width: 100%;
  height: 100%;
  padding-left: var(--size);
  padding-right: 4px;
  font-size: var(--font-size);
  font-weight: 700;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    color: inherit;
    font-weight: 400;
  }
`;

export default IconInput;
