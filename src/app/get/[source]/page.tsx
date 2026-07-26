import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/content/site';

const campaignRedirects = {
  // m3Vn9: site.store.campaigns.m3Vn9,
  // t7Kp1: site.store.campaigns.t7Kp1,
} as const;

type CampaignSource = keyof typeof campaignRedirects;

export function generateStaticParams() {
  return Object.keys(campaignRedirects).map((source) => ({ source }));
}

export default async function CampaignRedirectPage({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const { source } = await params;
  const destination = campaignRedirects[source as CampaignSource];

  if (!destination) {
    notFound();
  }

  permanentRedirect(destination);
}
