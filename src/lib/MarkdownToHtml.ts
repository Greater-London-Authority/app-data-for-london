// src/lib/markdownToHtml.ts
import fs from 'fs';
import path from 'path';

export async function getMarkdownContent(fileName: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'src/content', fileName);
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading Markdown file ${fileName}:`, error);
    return '# No Content Available\n\nThe requested content could not be found.'; // Provide a fallback content
  }
}
