module.exports = {
  title: 'Renovate',
  tagline: 'Documentation for Renovate',
  url: 'https://docs.renovate.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/logo.png',
  tagline: '',
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Renovate',
      logo: {
        alt: 'Renovate Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   to: 'docs',
        //   // activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/renovatebot/renovate',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: 'blog',
        //     // },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/renovatebot/renovate',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'Renovate Logo',
        src: '/img/logo.png',
      },
      copyright: `Built with Daucusaurus v2`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          homePageId: 'welcome',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/renovatebot/renovate/edit/master/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/renovatebot/renovate/edit/master/docs/blog/',
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} Renovate.`,
        //   },
        // },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      },
    ],
  ],
};
