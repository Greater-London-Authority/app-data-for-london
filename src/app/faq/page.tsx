import Breadcrumbs from '@/components/Breadcrumbs';
import getStrapiData from '@/lib/Strapi';

const pageDocumentId = 'b32r9zfgy8gefbyut416v8p0';
const path = `/api/pages/${pageDocumentId}`;

export default async function FAQ() {
  const { data } = await getStrapiData(path);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: data.breadcrumb }, // No href means it's the current page
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <div className="mt-8 mb-24 block text-justify max-w-7xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
}
