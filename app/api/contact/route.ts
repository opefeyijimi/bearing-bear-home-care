import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  // handle the contact form submission
  return NextResponse.json({ message: 'Success' });
}