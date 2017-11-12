import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  align-items: ${props => (props.align ? props.align : 'flex-start')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  justify-content: space-between;
`;

export default FlexWrapper;
