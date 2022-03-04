class ResetAllVoteCacheCounters < ActiveRecord::Migration[6.1]
  def up
    Choice.all.each do |choice|
      Choice.reset_counters(choice.id, :votes)
    end
  end

  def down
    # no rollback needed
  end
end
