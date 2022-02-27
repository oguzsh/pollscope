# frozen_string_literal: true

module Types
  class VoteType < Types::BaseObject
    field :id, ID, null: false
    field :choice_id, Integer, null: false
    field :poll_id, Integer, null: false
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
