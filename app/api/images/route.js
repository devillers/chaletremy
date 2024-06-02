import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const imagesDirectory = path.join(process.cwd(), 'public/flat');

  let filenames;
  try {
    filenames = fs.readdirSync(imagesDirectory);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Unable to read directory' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const images = filenames.map((name) => path.join('/flat', name));
  return new Response(JSON.stringify(images), {
    headers: { 'Content-Type': 'application/json' },
  });
}
