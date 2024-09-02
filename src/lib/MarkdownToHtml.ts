// src/lib/markdownToHtml.ts
import fs from 'fs';
import path from 'path';

export async function getMarkdownContent(fileName: string): Promise<string> {
	const filePath = path.join(process.cwd(), 'src/content', fileName);
	const content = fs.readFileSync(filePath, 'utf8');
	return content;
}
