import './App.css'
import { TextInput } from './components/TextInput/TextInput'

function App() {

  return <>
    <pre style={{whiteSpace: 'pre-wrap', textAlign: 'left', display: 'block'}}>
{`Task 1:
  Write the code for <TextInput/> element,
  which would highlight any text, 
  surrounded by `} <span style={{background: 'green', color: 'white'}}>%%double-percent%%</span> {`;
  
  The input behavior should remain the same for user.
`}
    </pre>
    <TextInput type='text' value={'make this input be able to highlight this %%text%%'} style={{width: 400}}/>
  </>
}

export default App
