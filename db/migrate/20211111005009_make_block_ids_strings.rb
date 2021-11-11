class MakeBlockIdsStrings < ActiveRecord::Migration[5.2]
  def change
    change_column :pages, :block_ids, :text, default: ""
  end
end
