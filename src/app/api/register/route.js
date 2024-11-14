import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { shoppingLists } from '../data';

export async function POST(request) {
  const code = uuidv4().slice(0, 6);
  shoppingLists[code] = { items: [], members: [] };

  return NextResponse.json({ code });
}
