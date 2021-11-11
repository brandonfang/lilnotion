class ChangeBlockIdsToArray < ActiveRecord::Migration[5.2]
  def change
    remove_index :pages, :block_ids
    remove_column :pages, :block_ids
    add_column :pages, :block_ids, :string, array: true, default: []
    add_index :pages, :block_ids
  end
end
