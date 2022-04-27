import { useState } from 'react';

function CreateTodoListPage() {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (event) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const cleanInputValue = inputValue.trim().toLowerCase();
    if (cleanInputValue) {
      console.log(cleanInputValue);
    }
    setInputValue('');
  };

  return (
    <>
      <h1>Create todo list</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChangeInputValue}
        />
        <button type='submit'>create</button>
      </form>
    </>
  );
}

export default CreateTodoListPage;
