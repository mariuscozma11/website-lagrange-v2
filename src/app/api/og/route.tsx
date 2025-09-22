import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    // Read the existing og-img.webp file
    const imageBuffer = await readFile(join(process.cwd(), 'public', 'og-img.webp'));
    
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving OG image:', error);
    return new Response('Image not found', { status: 404 });
  }
}