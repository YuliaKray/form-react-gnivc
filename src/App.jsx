import React from 'react';
import { Form } from './components/Form';


function App() {

  function sendFormData() {
    alert('Форма валидна, отправляется запрос');
  }

  return (
    <>
      <Form sendFormData={sendFormData} />
    </>
  )
}

export default App