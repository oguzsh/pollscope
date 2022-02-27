class VotesUniqueConstraint < ActiveRecord::Migration[6.1]
  def change
    add_index :votes, %i[user_id poll_id], unique: true
  end
end
