import { NextResponse } from 'next/server';
import { shoppingLists } from '../data';

export async function POST(request) {
  const { code, itemName } = await request.json();

  if (shoppingLists[code]) {
    const newItem = {
      id: Date.now(), // Nutzt den aktuellen Zeitstempel als eindeutige ID
      name: itemName,
      reservedBy: null,
      completed: false
    };
    shoppingLists[code].items.push(newItem);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'List not found' }, { status: 404 });
  }
}
