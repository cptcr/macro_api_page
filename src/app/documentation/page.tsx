// src/app/documentation/page.tsx
import { generateDocsMetadata } from '@/lib/metdata';
import DocumentationClient from './DocumentationClient';

interface Props {
  searchParams: { section?: string };
}

export async function generateMetadata({ searchParams }: Props) {
  return generateDocsMetadata(searchParams.section);
}

export default function DocumentationPage({ searchParams }: Props) {
  return <DocumentationClient searchParams={searchParams} />;
}