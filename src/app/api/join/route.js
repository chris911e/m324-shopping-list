import { NextResponse } from 'next/server';
import { shoppingLists } from '../data';

export async function POST(request) {
  const { code, memberName } = await request.json();
Object.keys(shoppingLists).forEach((code) => {
   console.log("Code:", code);
});

  if (shoppingLists[code]) {
    shoppingLists[code].members.push(memberName);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'List not found' }, { status: 404 });
  }
}
