import React from 'react';
import Link from 'next/link';
import getStrapiData from '@/lib/Strapi';

interface FooterLink {
  id: number;
  href: string;
  label: string;
  target: string | null;
  isExternal: boolean;
}

interface FooterColumn {
  id: number;
  title: string;
  links: FooterLink[];
}

interface FooterData {
  Disclaimer: string;
  footerColumns: FooterColumn[];
}

const footerPath = `/api/global`;
const footerParams = {
  populate: {
    footer: {
      populate: ['footerColumns.links'],
    },
  },
};

export default async function Footer() {
  const { data } = await getStrapiData(footerPath, footerParams);
  const footerData: FooterData = data.footer;

  return (
    <footer className="text-white flex justify-center bg-ldn-dark p-4 mt-11 border-t border-ldn-grey">
      <div className="flex flex-col max-w-7xl w-full">
        <div className="flex flex-wrap justify-between">
          {footerData.footerColumns.map((column: FooterColumn) => (
            <section key={column.id} className="mb-8 w-full md:w-1/5">
              <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
              <ul className="list-none pl-0 space-y-2">
                {column.links.map((link: FooterLink) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target={link.target || undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="flex-col">
          <section>
            <p className="text-sm">{footerData.Disclaimer}</p>
          </section>
        </div>
      </div>
    </footer>
  );
}
