import styled from 'styled-components'
import { motion } from 'framer-motion'

const FontFamily = styled(motion.div)`
  font-family: var(--font-family);
`

const SmallFont = styled(FontFamily)`
  font-size: 14px;
  line-height: 17px;
`

const MiddleFont = styled(FontFamily)`
  font-size: 18px;
  line-height: 22px;
  word-break: normal;
`

const BigFont = styled(FontFamily)`
  font-size: 25px;
`

export const SmallTextBold = styled(SmallFont)`
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--color-base-light-black);
`

export const SmallTextSemiBold = styled(SmallFont)`
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-base-light-black);
`

export const MiddleTextBold = styled(MiddleFont)`
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.01em;
  color: var(--color-base-main-black);
`

export const InlineMiddleTextBold = styled(MiddleTextBold)`
  display: inline;
`

export const BigTextBold = styled(BigFont)`
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.01em;
  color: var(--color-base-main-black);
`

export const MiddleText = styled(MiddleFont)`
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--color-base-main-black);
`

export const MiddleTextSemiBold = styled(MiddleFont)`
  font-weight: 600;
  text-align: center;
  color: var(--color-base-main-black);
`

export const InlineMiddleTextSemiBold = styled(MiddleTextSemiBold)`
  display: inline;
`

export const BigTextExtraBold = styled(BigFont)`
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--color-base-main);
`
