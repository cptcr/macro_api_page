// src/app/page.tsx
import { generateMetadata as generateMeta } from '@/lib/metdata';
import HomeClient from './HomeClient';

export const metadata = generateMeta();

export default function Home() {
  return <HomeClient />;
}