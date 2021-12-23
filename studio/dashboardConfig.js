export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c3f6f36a7c1ff38e50c3a3',
                  title: 'Sanity Studio',
                  name: 'prestige-gatsby-studio',
                  apiId: '001f57a1-46a5-48f1-9174-0d23a0682337'
                },
                {
                  buildHookId: '61c3f6f3fd45e0f716f68150',
                  title: 'Portfolio Website',
                  name: 'prestige-gatsby',
                  apiId: '410c19cc-823f-4714-bab4-15835f729c42'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WillTechnologies/prestige-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://prestige-gatsby.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
