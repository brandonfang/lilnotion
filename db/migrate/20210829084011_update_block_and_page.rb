class UpdateBlockAndPage < ActiveRecord::Migration[5.2]
  def change
    add_column :pages, :user_id, :uuid
    add_index :pages, :user_id
    add_column :blocks, :page_id, :uuid
    add_index :blocks, :page_id
  end
end
