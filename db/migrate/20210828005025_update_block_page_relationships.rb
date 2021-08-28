class UpdateBlockPageRelationships < ActiveRecord::Migration[5.2]
  def change
    remove_column :blocks, :workspace_id
    remove_column :pages, :workspace_id
  end
end
