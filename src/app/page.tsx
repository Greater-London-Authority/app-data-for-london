import MarkdownRenderer from '@/components/MarkdownRenderer';
import getStrapiData from '@/lib/Strapi';

export default async function Home() {
  const pageDocumentId = 't3o5oqd1uopm0fjxvy6fh3cd';
  const { data } = await getStrapiData(`/api/pages/${pageDocumentId}`);
  const MDContent = data.rich_text;

  return (
    <div className="py-24">
      <div className="block text-justify max-w-7xl mx-auto">
        <div>
          <div>
            <h2>{data.title}</h2>
            <MarkdownRenderer content={MDContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
