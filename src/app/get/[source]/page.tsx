import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/content/site';

const campaignRedirects = {
  L4pX7: site.store.campaigns.L4pX7,
  q8Rz2: site.store.campaigns.q8Rz2,
  N6vK3: site.store.campaigns.N6vK3,
  w9Tm5: site.store.campaigns.w9Tm5,
  F7nQ4: site.store.campaigns.F7nQ4,
  y3Hv8: site.store.campaigns.y3Hv8,
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
