class ChangeBlockIdsToString < ActiveRecord::Migration[5.2]
  def up 
    change_column :pages, :block_ids, :string, array: true, :default => [], null: false
  end

  def down 
    change_column :pages, :block_ids, :string, array: true, :default => [], null: false
  end
end
