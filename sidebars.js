module.exports = {
  someSidebar: [
    'welcome',
    {
      'Getting Started': [
        'install-github-app',
        'install-gitlab-app',
        'configure-renovate',
        'private-modules',
        'reconfigure-renovate',
      ],
    },
    'configuration-options',
    'self-hosted-configuration',
    {
      'Renovate Modules': [
        'modules/platform',
        {
          'Manager': ['modules/manager/index',
            'modules/manager/ansible-galaxy',
            'modules/manager/ansible',
            'modules/manager/bazel',
            'modules/manager/buildkite',
            'modules/manager/bundler',
            'modules/manager/cargo',
            'modules/manager/cdnurl',
            'modules/manager/circleci',
            'modules/manager/cocoapods',
            'modules/manager/composer',
            'modules/manager/deps-edn',
            'modules/manager/docker-compose',
            'modules/manager/dockerfile',
            'modules/manager/droneci',
            'modules/manager/git-submodules',
            'modules/manager/github-actions',
            'modules/manager/gitlabci-include',
            'modules/manager/gitlabci',
            'modules/manager/gomod',
            'modules/manager/gradle-wrapper',
            'modules/manager/gradle',
            'modules/manager/helm-requirements',
            'modules/manager/helm-values',
            'modules/manager/helmfile',
            'modules/manager/helmv3',
            'modules/manager/homebrew',
            'modules/manager/html',
            'modules/manager/kubernetes',
            'modules/manager/kustomize',
            'modules/manager/leiningen',
            'modules/manager/maven',
            'modules/manager/meteor',
            'modules/manager/mix',
            'modules/manager/nodenv',
            'modules/manager/npm',
            'modules/manager/nuget',
            'modules/manager/nvm',
            'modules/manager/pip_requirements',
            'modules/manager/pip_setup',
            'modules/manager/pipenv',
            'modules/manager/poetry',
            'modules/manager/pub',
            'modules/manager/regex',
            'modules/manager/ruby-version',
            'modules/manager/sbt',
            'modules/manager/swift',
            'modules/manager/terraform',
            'modules/manager/travis',
          ],
        },
        'modules/datasource',
        'modules/versioning',
      ]
    },
    'config-presets',
    {
      'Language Support': [
        'bazel',
        'docker',
        'golang',
        'java',
        'javascript',
        'node',
        'nuget',
        'php',
        'python',
        'ruby',
      ]
    },
    {
      'Deep Dives': [
        'dependency-pinning',
        'configuration-templates',
        'updating-rebasing',
        'semantic-commits',
        'noise-reduction',
      ]
    },
    {
      'Included Presets': [
        'presets-config',
        'presets-default',
        'presets-docker',
        'presets-group',
        'presets-helpers',
        'presets-monorepo',
        'presets-packages',
        'presets-preview',
        'presets-schedule',
      ]
    },
    {
      'All Other': [
        'templates',
        'faq',
      ]
    }
  ]
}