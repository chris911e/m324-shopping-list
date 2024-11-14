'use client'
import { useState } from 'react';

export default function Page() {
  const [code, setCode] = useState('');

  const registerList = async () => {
    const response = await fetch('/api/register', {
      method: 'POST' ,
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    setCode(data.code);
  }

  return (
    <div>
      <h1>Neue Einkaufsliste erstellen</h1>
      <button onClick={registerList}>Einkaufsliste erstellen</button>
      {code && <p>Teilen Sie diesen Code: {code}</p>}
    </div>
  )
}
