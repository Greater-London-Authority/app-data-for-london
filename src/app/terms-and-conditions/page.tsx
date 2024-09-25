import Breadcrumbs from '@/components/Breadcrumbs';
import getStrapiData from '@/lib/Strapi';

const pageDocumentId = 'eo7k7zn7d317dm5ti0pyqssw';
const path = `/api/pages/${pageDocumentId}`;

export default async function TermsAndConditions() {
  const { data } = await getStrapiData(path);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: data.breadcrumb }, // No href means it's the current page
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <div className="block text-justify max-w-3xl px-4 my-4 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
}
