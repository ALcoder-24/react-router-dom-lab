import LetterForm from "./components/LetterForm/LetterForm.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import './App.css'

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const addLetter = (formData) => {
    const newLetter ={
      ...formData,
      mailboxId: Number(formData.mailboxId),
    };

    setLetters((prevLetters) => [...prevLetters, newLetter]);
  };

  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize,
    };
    setMailboxes([...mailboxes, newBox]);
    console.log("New mailbox form data:", formData);
  };
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" 
      element={
        <main>
          <h1>Post Office</h1>
          </main>
      }
      />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
    <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
    />
    </Routes>
    </>
  );
};

export default App;
