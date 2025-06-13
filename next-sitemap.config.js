/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://macro.cptcr.dev',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => [
    {
      loc: '/llms.txt',
      lastmod: new Date().toISOString(),
    },
  ],
};
