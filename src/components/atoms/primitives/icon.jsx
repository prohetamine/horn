/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const IconSmall = motion(
  forwardRef(({ src: Icon, style, ...props }, ref) => (
    <Icon
      ref={ref}
      style={{ 
        width: '16px', 
        height: '16px', 
        minWidth: '16px', 
        minHeight: '16px', 
        outline: 'none', 
        ...style 
      }}
      {...props}
    />
  ))
)

export const IconNormal = motion(
  forwardRef(({ src: Icon, style, ...props }, ref) => (
    <Icon
      ref={ref}
      style={{ 
        width: '24px', 
        height: '24px', 
        minWidth: '24px', 
        minHeight: '24px', 
        outline: 'none', 
        ...style
      }}
      {...props}
    />
  ))
)

export const IconBig = motion(
  forwardRef(({ src: Icon, style, ...props }, ref) => (
    <Icon
      ref={ref}
      style={{ 
        width: '48px', 
        height: '48px', 
        minWidth: '48px', 
        minHeight: '48px', 
        outline: 'none', 
        ...style 
      }}
      {...props}
    />
  ))
)