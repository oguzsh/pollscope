# frozen_string_literal: true

module Types
  class ChoiceType < Types::BaseObject
    field :id, ID, null: false
    field :poll_id, Integer, null: false
    field :choice_text, String
    field :votes, [Types::VoteType], null: false
    field :vote_count, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def vote_count
      object.votes.size
    end
  end
end
