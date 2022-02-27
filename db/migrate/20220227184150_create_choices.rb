class CreateChoices < ActiveRecord::Migration[6.1]
  def change
    create_table :choices do |t|
      t.belongs_to :poll, null: false, foreign_key: true
      t.string :choice_text

      t.timestamps
    end
  end
end
