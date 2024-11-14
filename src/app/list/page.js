'use client'
import { useState } from 'react';

export default function AddItem() {
  const [code, setCode] = useState('');
  const [itemName, setItemName] = useState('');
  const [added, setAdded] = useState(false);

  const addItem = async () => {
    const response = await fetch('/api/addItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, itemName })
    });
    if (response.ok) {
      setAdded(true);
      setItemName(''); // Eingabefeld leeren
    } else {
      alert('Liste nicht gefunden');
    }
  };

  return (
    <div>
      <h1>Artikel hinzufügen</h1>
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artikelname"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={addItem}>Hinzufügen</button>
      {added && <p>Artikel hinzugefügt!</p>}
    </div>
  )
}
