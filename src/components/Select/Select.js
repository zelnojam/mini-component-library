import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const labelEl = React.useRef();
  const [width, setWidth] = React.useState();

  React.useEffect(() => {
    setWidth(labelEl.current.getBoundingClientRect().width);
  }, [displayedValue]);

  return (
    <Wrapper>
      <Label htmlFor={label} ref={labelEl}>
        {displayedValue}
      </Label>
      <SelectWrapper
        id={label}
        value={value}
        onChange={onChange}
        style={{
          '--width': Math.ceil(width) + 'px',
        }}
      >
        {children}
      </SelectWrapper>
      <IconWrapper id='chevron-down' size={16} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Label = styled.label`
  position: absolute;
  white-space: nowrap;
  line-height: 19px;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SelectWrapper = styled.select`
  appearance: none;
  border: none;
  width: calc(var(--width) + 16px + 52px);
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: transparent;
  line-height: 19px;

  & option {
    color: initial;
  }
`;

export default Select;
