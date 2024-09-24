import Breadcrumbs from '@/components/Breadcrumbs';
import getStrapiData from '@/lib/Strapi';

const pageDocumentId = 'agy8sb0rpu9ui00bljmjkr8g';
const path = `/api/pages/${pageDocumentId}`;

export default async function Accessibility() {
  const { data } = await getStrapiData(path);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: data.breadcrumb }, // No href means it's the current page
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <div className="py-24 block text-justify max-w-7xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </div>
  );
}
