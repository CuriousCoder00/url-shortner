import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {

    const { longUrl } = await req.json();

    if (!longUrl) return NextResponse.json({ error: 'URL is required' }, { status: 400 });

    const shortUrl = Math.random().toString(36).substring(2, 8);

    const link = await prisma.link.create({
        data: { longUrl, shortUrl },
    });

    return NextResponse.json(link, { status: 201 });
}
