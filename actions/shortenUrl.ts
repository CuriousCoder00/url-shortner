"use server";
import { prisma } from "@/lib/prisma";

export async function shortenUrl(longUrl: string) {
    if (!longUrl) return { error: 'URL is required' };
    const shortUrl = Math.random().toString(36).substring(2, 8);

    const link = await prisma.link.create({
        data: { longUrl, shortUrl },
    });

    return link;
}

export async function redirectUrl(shortUrl: string) {
    if (!shortUrl) return { error: 'Short URL is required' };
    const link = await prisma.link.findFirst({
        where: { shortUrl },
        select: { longUrl: true },
    });

    if (!link) return { error: 'Link not found' };

    return link.longUrl as string;
}