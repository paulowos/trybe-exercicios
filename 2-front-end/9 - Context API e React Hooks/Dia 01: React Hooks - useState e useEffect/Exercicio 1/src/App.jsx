import React from 'react';
import { useState } from 'react';
import messagesList from './data/emails';
import { useEffect } from 'react';

export default function App() {
  const [emails, setEmails] = useState([]);
  const [lidos, setLidos] = useState([]);

  useEffect(() => {
    const newArray = emails.map((email) => {
      const result = lidos.includes(email.id) ? 1 : 0;
      email.status = result;
      return email;
    });
    setEmails(newArray);
  }, [lidos]);

  useEffect(() => {
    const test = emails.every((email) => email.status === 1);
    if (test) {
      alert('Todos os emails foram lidos');
    }
  }, [emails]);

  useEffect(() => {
    setEmails(messagesList);
  }, []);

  const handleLido = (id) => {
    setLidos([...lidos, id]);
  };

  const handleNaoLido = (id) => {
    const newArray = lidos.filter((lido) => lido !== id);
    setLidos(newArray);
  };

  return (
    <div>
      {emails.map((email) => (
        <div key={email.id}>
          <h3>{email.title}</h3>
          <p>{email.status === 0 ? 'Não Lido' : 'Lido'}</p>
          <button type="button" onClick={() => handleLido(email.id)}>
            Lido
          </button>
          <button type="button" onClick={() => handleNaoLido(email.id)}>
            Não Lido
          </button>
        </div>
      ))}
    </div>
  );
}
