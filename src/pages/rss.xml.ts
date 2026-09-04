import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const caseStudies = await getCollection('caseStudies');

  return rss({
    title: `${site.name} Case Studies`,
    description: site.description,
    site: context.site ?? site.url,
    items: caseStudies
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((cs) => ({
        title: cs.data.title,
        description: cs.data.description,
        pubDate: cs.data.pubDate,
        link: `/case-studies/${cs.id}/`,
      })),
  });
}
