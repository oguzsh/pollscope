require 'graphql/rake_task'

GraphQL::RakeTask.new(
  schema_name: 'PollscopeSchema',
  directory: './app/javascript/graphql',
  dependencies: [:environment]
)
