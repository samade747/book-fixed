import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3c1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '140'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '48e'),
            routes: [
              {
                path: '/docs/chapter-1-getting-started',
                component: ComponentCreator('/docs/chapter-1-getting-started', 'cc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-2-architecture',
                component: ComponentCreator('/docs/chapter-2-architecture', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-3-frontend',
                component: ComponentCreator('/docs/chapter-3-frontend', '9d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-4-backend',
                component: ComponentCreator('/docs/chapter-4-backend', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-5-rag-pipeline',
                component: ComponentCreator('/docs/chapter-5-rag-pipeline', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-6-deployment',
                component: ComponentCreator('/docs/chapter-6-deployment', '4e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rag-chatbot/',
                component: ComponentCreator('/docs/rag-chatbot/', '54a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
