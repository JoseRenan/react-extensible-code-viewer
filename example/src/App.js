import React, { useState } from 'react'

import { CodeViewer } from 'react-extensible-code-viewer'
import 'react-extensible-code-viewer/dist/index.css'

const code = `public class Main {
  private int c = 5;

  public static void main(String args[]) {
    int a = 1;
    int b = 2;
    System.out.println(a + b + c + 1);
    Main.sayHello()
  }

  public static void sayHello() {
    System.out.println("Hello 🥺")
  }
}`

const AddCommentButton = ({ onClick }) => (
  <div className='add-comment' onClick={onClick}>
    +
  </div>
)

const CommentInput = () => (
  <div className='comment-input'>
    <textarea style={{ width: '100%' }} />
    <div>
      <button>Cancel</button>
      <button>Comment</button>
    </div>
  </div>
)

const CodeLine = ({ lineNumber, children }) => {
  const [showAddComment, setShowAddComment] = useState(false)
  const [showCommentInput, setShowCommentInput] = useState(false)
  return (
    <React.Fragment>
      <span
        style={{ display: 'flex' }}
        onMouseEnter={() => setShowAddComment(true)}
        onMouseLeave={() => setShowAddComment(false)}
      >
        <span className='line-number'>{lineNumber}.</span>
        <span style={{ width: '1rem' }}>
          {showAddComment ? (
            <AddCommentButton
              onClick={() => setShowCommentInput(!showCommentInput)}
            />
          ) : null}
        </span>
        {children}
      </span>
      {showCommentInput ? <CommentInput /> : null}
    </React.Fragment>
  )
}

const App = () => {
  return (
    <>
      <h1>React Extensible Code Viewer Example</h1>
      <h3>Result:</h3>
      <CodeViewer code={code} language='java' />
      <h3>Code:</h3>
      <CodeViewer
        code={`import React, { useState } from 'react'
import { CodeViewer } from 'react-extensible-code-viewer'
import 'react-extensible-code-viewer/dist/index.css'

export const App = () => <CodeViewer code={code} language='java' />`}
        language='javascript'
      />

      <h1>
        Custom example with review comments (hover a code line and click on the
        +)
      </h1>
      <h3>Result:</h3>
      <CodeViewer
        code={code}
        language='java'
        line={(props) => <CodeLine {...props} />}
      />
      <h3>Code:</h3>
      <CodeViewer
        code={`import React, { useState } from 'react'
import { CodeViewer } from 'react-extensible-code-viewer'
import 'react-extensible-code-viewer/dist/index.css'

const AddCommentButton = ({ onClick }) => (
  <div className='add-comment' onClick={onClick}>
    +
  </div>
)

const CommentInput = () => (
  <div className='comment-input'>
    <textarea style={{ width: '100%' }} />
    <div>
      <button>Cancel</button>
      <button>Comment</button>
    </div>
  </div>
)

const CodeLine = ({ lineNumber, children }) => {
  const [showAddComment, setShowAddComment] = useState(false)
  const [showCommentInput, setShowCommentInput] = useState(false)
  return (
    <React.Fragment>
      <span
        style={{ display: 'flex' }}
        onMouseEnter={() => setShowAddComment(true)}
        onMouseLeave={() => setShowAddComment(false)}
      >
        <span className='line-number'>{lineNumber}.</span>
        <span style={{ width: '1rem' }}>
          {showAddComment ? (
            <AddCommentButton
              onClick={() => setShowCommentInput(!showCommentInput)}
            />
          ) : null}
        </span>
        {children}
      </span>
      {showCommentInput ? <CommentInput /> : null}
    </React.Fragment>
  )
}

export const App = () => (
  <CodeViewer
    code={code}
    language='java'
    line={(props) => <CodeLine {...props}/>}
  />
)`}
        language='jsx'
      />
    </>
  )
}

export default App
