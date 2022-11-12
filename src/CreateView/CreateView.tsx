import './CreateView.css'
import {useRef} from 'react';

let id = 0;

type Props = {
  onCreateMessage: Function
}

function CreateView({onCreateMessage} : Props) {
  const inputSubject = useRef<HTMLInputElement>(null)
  const inputBody = useRef<HTMLInputElement>(null)
 
  function onSubmit(event : any) {
    event.preventDefault();
    let subject = inputSubject.current?.value;
    let body = inputBody.current?.value

    onCreateMessage({id: id++, subject: subject, body: body, read: false});

    event.target.reset();
    // Focus the first input after a successful submission
    inputSubject.current?.focus();
  }
  
  return (
    <form onSubmit={onSubmit} id="create-form">
        <TextField title="Subject" name="subject" inputRef={inputSubject} />
        <TextField title="Body" name="body" inputRef={inputBody}/>
        <button type="submit" className='btn-submit'>Submit</button>
    </form>
  );
}
 
function TextField({title, name, inputRef}: any) {
  return <>
  <label className="form-item">
    <p>{title}</p>
    <input required ref={inputRef} name={name} className="form-field"/>
  </label>
  </>
}

export default CreateView