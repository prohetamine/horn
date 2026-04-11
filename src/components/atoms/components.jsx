/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SmallTextBold } from './primitives/font'

export const ButtonBody = styled(motion.div)`
  background: var(--color-base-main-black);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
  border-radius: 14px;
  padding: 12px 32px;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
`

export const BigButtonBody = styled(motion.div)`
  background: var(--color-base-main-black);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  border-radius: 20px;
  padding: 24px 96px;
  cursor: pointer;
  user-select: none;
  cursor: pointer;
  user-select: none;
`

export const Input = styled(motion.input)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0px;
  border: 1px solid var(--color-base-gray);
  border-radius: 14px;
  padding: 12px;
  background: var(--color-base-light-gray);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  text-align: start;
  color: var(--color-base-main-black);
  width: 100%;
  max-width: 302px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-base-dark-gray);
  }
`

export const Textarea = styled(motion.textarea)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0px;
  border: 1px solid var(--color-base-gray);
  border-radius: 14px;
  padding: 12px;
  background: var(--color-base-light-gray);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  text-align: start;
  color: var(--color-base-main-black);
  width: 100%;
  max-width: 302px;
  height: 170px;
  outline: none;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-base-dark-gray);
  }
`

export const InputBody = styled(motion.div)`
  background: var(--color-base-light-gray);
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid var(--color-base-gray);
  border-radius: 14px;
  padding: 12px;
  max-width: 302px;
  box-sizing: border-box;
  position: relative;
`

export const RadioTextOverflow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  padding: 6px 12px;
  position: relative;
  z-index: 999;
  cursor: pointer;
  user-select: none;
`

export const RadioSelectedElement = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 10px;
  background: var(--color-base-main-black);
  position: absolute;
  left: 12px;
  height: 34px;
`

export const ExampleVoteButtonBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0px;
  border: 1px dashed var(--color-base-gray);
  border-radius: 14px;
  padding: 24px;
`

export const VoteButtonBody = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  border-radius: 100px;
  padding: 24px;
  cursor: pointer;
`

export const CircleButton = styled(motion.div)`
  border-radius: 100px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CircleDotSelect = styled(motion.div)`
  border-radius: 100px;
  background: var(--color-base-main-black);
  width: 12px;
  height: 12px;
`

export const ContentBody = styled(motion.div)`
  border-radius: 14px;
  padding: 24px;
`

export const ProgressBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 12px;
  border-radius: 100px;
  padding: 6px;
  min-width: 300px;
  width: 100%;
`

export const ProgressLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2px;
  border-radius: 100px;
  padding: 6px 20px;
  height: 28px;
  box-sizing: border-box;
  min-width: fit-content;
`


export const SmallTextFakeLink = styled(SmallTextBold)`
    text-decoration: none;  
    cursor: pointer;

    &:hover,a:active {
        text-decoration: underline;  
    }
`

export const LoaderBody = styled.div`
    @keyframes compass-search {
        0%   { transform: rotate(0deg); }
        10%  { transform: rotate(80deg); }
        20%  { transform: rotate(-60deg); }
        35%  { transform: rotate(40deg); }
        50%  { transform: rotate(-25deg); }
        65%  { transform: rotate(15deg); }
        80%  { transform: rotate(-6deg); }
        90%  { transform: rotate(3deg); }
        100% { transform: rotate(0deg); }
    }

    width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`