import React, { useRef, useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'
import styles from './styles.module.css'

export interface HighlighterProps {
  children: string
  language?: string
}

export interface Props {
  code: string
  language?: string
  endLineChar?: string
  line: (lineProps: {
    lineNumber: number
    code: string
    children: React.ReactNode
  }) => React.ReactNode
}

export const Highlighter = ({ language, children }: HighlighterProps) => {
  const preRef = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if (preRef && preRef.current) {
      hljs.highlightBlock(preRef.current)
    }
  }, [preRef])
  return (
    <pre ref={preRef} className={`${styles.pre} ${language}`}>
      <code className={styles.code}>{children}</code>
    </pre>
  )
}

export const CodeLine = ({
  lineNumber,
  children
}: {
  lineNumber: number
  children: React.ReactNode
}) => {
  return (
    <span className={`${styles.line}`}>
      <span className={`${styles.lineNumber}`}>{lineNumber}.</span>
      {children}
    </span>
  )
}

export const CodeViewer = ({
  code,
  endLineChar = '\n',
  language,
  line = (props) => <CodeLine {...props} />
}: Props) => {
  const lines = code.split(endLineChar)
  return (
    <div className={`${styles.container} hljs`}>
      {lines.map((code, index) => (
        <span key={index} className={styles.lineContainer}>
          {line({
            lineNumber: index + 1,
            code,
            children: <Highlighter language={language}>{code}</Highlighter>
          })}
        </span>
      ))}
    </div>
  )
}
