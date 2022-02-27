class Vote < ApplicationRecord
  belongs_to :choice
  belongs_to :poll
  belongs_to :user

  # Unique together constraint
  validates :user_id, uniqueness: { scope: :poll }
end
