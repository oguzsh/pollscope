# frozen_string_literal: true

module Types
  class PollType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :question, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
