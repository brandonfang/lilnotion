class AddBlockIds < ActiveRecord::Migration[5.2]
  def change
    add_column :pages, :block_ids, :text, array: true, default: []
    add_index :pages, :block_ids
  end
end
