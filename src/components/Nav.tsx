import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import getStrapiData from '@/lib/Strapi';

interface NavigationLink {
  id: number;
  href: string;
  label: string;
  target: string | null;
  isExternal: boolean;
}

interface NavigationData {
  links: NavigationLink[];
}

const navPath = `/api/global`;
const navParams = {
  populate: {
    navigation: {
      populate: ['links'],
    },
  },
};

export default async function Nav() {
  const { data } = await getStrapiData(navPath, navParams);
  const navigationData: NavigationData = data.navigation;

  return (
    <div className="w-full flex justify-center text-darkpink">
      <nav className="flex flex-wrap justify-between items-center px-4 py-[1.4rem] max-w-7xl w-full">
        <div className="flex flex-wrap items-center">
          <Link href="/">
            <Image
              src="/Data_For_London_Main_Logo.png"
              alt="Data for London"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row justify-between gap-9 list-none">
          {navigationData.links.map((link: NavigationLink) => (
            <li key={link.id}>
              <Link
                href={link.href}
                target={link.target || undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
              >
                <span className="flex items-center font-semibold">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
