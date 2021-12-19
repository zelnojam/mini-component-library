/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Sizes = {
  small: {
    height: '8px',
    borderRadius: '4px',
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
  },
  large: {
    height: '24px',
    padding: '4px',
    borderRadius: '8px',
  },
};

const ProgressBar = ({ value = '0', size }) => {
  const sizeStyle = Sizes[size];

  return (
    <Wrapper
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={sizeStyle}
    >
      <FillContainer>
        <Fill style={{ '--value': value + '%' }} />
      </FillContainer>
      <VisuallyHidden>Module Progress</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const FillContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Fill = styled.div`
  width: var(--value);
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
