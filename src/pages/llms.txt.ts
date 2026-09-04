import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site, services, pricingTiers } from '../data/site';

export const GET: APIRoute = async () => {
  const caseStudies = (await getCollection('caseStudies')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const caseStudyLines = caseStudies
    .map((cs) => `- [${cs.data.title}](${site.url}/case-studies/${cs.id}/): ${cs.data.description}`)
    .join('\n');

  const serviceLines = services.map((svc) => `- ${svc.title}: ${svc.summary}`).join('\n');
  const pricingLines = pricingTiers
    .map((tier) => `- ${tier.name}: ${tier.price}${tier.period} — ${tier.desc}`)
    .join('\n');

  const body = `# ${site.name}

> ${site.description}

${site.name} is a fractional CFO practice for venture-backed B2B companies moving from Series A and B through later growth rounds to Pre-IPO. Flat monthly retainer by stage, never a percentage of capital raised. B2B only, no consumer or bootstrapped brands.

## Services

${serviceLines}

## Pricing

${pricingLines}

## Pages

- [Home](${site.url}/): Overview, services, stages, fit, and the booking form.
- [Pricing](${site.url}/pricing/): Flat monthly retainers by funding stage.
- [Case Studies](${site.url}/case-studies/): Real B2B fractional CFO engagements, told in full.

## Case Studies

${caseStudyLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
