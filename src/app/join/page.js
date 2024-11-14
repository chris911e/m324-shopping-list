'use client'
import { useState } from 'react';

export default function Page() {
  const [code, setCode] = useState('');
  const [memberName, setMemberName] = useState('');
  const [joined, setJoined] = useState(false);

  const joinList = async () => {
    const response = await fetch('/api/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, memberName })
    });
    if (response.ok) {
      setJoined(true);
    } else {
      alert('Liste nicht gefunden');
    }
  };

  return (
    <div>
      <h1>Einkaufsliste beitreten</h1>
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />
      <button onClick={joinList}>Beitreten</button>
      {joined && <p>Erfolgreich beigetreten!</p>}
    </div>
  )
}
