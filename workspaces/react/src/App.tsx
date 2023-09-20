import './App.css'
import { TextInput } from './components/TextInput/TextInput'

function App() {

  return <>
    <pre style={{whiteSpace: 'pre-wrap', textAlign: 'left', display: 'block'}}>
{`Task 1 (Text Input):
  Write the code for <TextInput/> element,
  which would highlight any text, 
  surrounded by `} <span style={{background: 'green', color: 'white'}}>%%double-percent%%</span> {`;
  
  The input behavior should remain the same for user.
`}
    </pre>
    <TextInput type='text' defaultValue={'make this input be able to highlight this %%text%%'} style={{width: 400}}/>

    <pre style={{whiteSpace: 'pre-wrap', textAlign: 'left', display: 'block'}}>
{`Task 2 (Deep Merge):
  In ./src/utils/deepMerge folder, 
  there are several skipped tests (2 skipped).
  Seems like someone just didn't implement the merge function correctly
  Could you please fix the deepMerge function, 
  so it could truly merge deeply? (un-skip the tests)

  Do not use any external libraries, please write all the code by yourself.
`}
    </pre>
  </>
}

export default App
