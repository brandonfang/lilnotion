class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships, id: :uuid do |t|
      t.uuid :workspace_id, null: false, index: true
      t.uuid :user_id, null: false, index: true
      t.string :role, null: false
      t.timestamps
    end
  end
end
