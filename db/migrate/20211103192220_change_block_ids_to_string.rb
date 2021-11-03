class ChangeBlockIdsToString < ActiveRecord::Migration[5.2]
  def change
    change_column :pages, :block_ids, :string, null: false, default: ''
  end
end
