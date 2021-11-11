class AddUserIdToBlocks < ActiveRecord::Migration[5.2]
  def change
    add_column :blocks, :user_id, :uuid, null: false
    add_index :blocks, :user_id
  end
end
