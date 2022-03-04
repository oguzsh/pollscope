class AddVotesCountToChoices < ActiveRecord::Migration[6.1]
  def change
    add_column :choices, :votes_count, :integer
  end
end
