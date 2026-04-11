import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'};
  gap: ${props => props.gap || '0px'};
`

export const PageContentBody = styled.div`
  width: 100%;
  max-width: 460px;
  box-sizing: border-box;
`

export const Lines = styled.div`
  border-radius: 100px;
  width: 96px;
  height: 1px;
  background: var(--color-base-dark-gray);
`