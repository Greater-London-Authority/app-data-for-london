import getStrapiData from '@/lib/Strapi';

const pageDocumentId = 't3o5oqd1uopm0fjxvy6fh3cd';
const path = `/api/pages/${pageDocumentId}`;

export default async function Home() {
  const { data } = await getStrapiData(path);

  return (
    <div className="py-24">
      <div className="block text-justify max-w-7xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
}
