import Markdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import 'katex/dist/katex.min.css'


const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={monokai} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
      <code className={className} {...props}>{ children }</code>
    )
  }
}


function MarkdownBlock({ content, contentConfig }) {


  let markdownComponent = null
  if (contentConfig?.markdownType === 'no-latex') {
    markdownComponent = (
      <Markdown 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        children={content} 
      />
    )
  }
  else {
    markdownComponent = (
      <Markdown 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components}
        children={content} 
      />
    )
  }
  
  return (
    <Markdown 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components}
        children={content} 
      />
  )
}


function CodeBlock({ content, contentConfig }) {

  return (
    <SyntaxHighlighter language={contentConfig?.language} style={monokai}>
      { content }
    </SyntaxHighlighter>
  )
}


export { MarkdownBlock, CodeBlock }
