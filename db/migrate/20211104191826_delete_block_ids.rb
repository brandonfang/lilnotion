class DeleteBlockIds < ActiveRecord::Migration[5.2]
  def change
    remove_column :pages, :block_ids, :string
  end
end
