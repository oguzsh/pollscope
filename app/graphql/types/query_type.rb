module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :users, [Types::UserType], null: false
    field :polls, [Types::PollType], null: false
    field :votes, [Types::VoteType], null: false
    field :choices, [Types::ChoiceType], null: false

    def users
      User.all
    end

    def polls
      Poll.all.includes([:choices])
    end

    def votes
      Vote.all
    end

    def choices
      Choice.all
    end
  end
end
