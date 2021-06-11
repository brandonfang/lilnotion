class AddWorkspaceIdToBlocksAndPages < ActiveRecord::Migration[5.2]
  def change
    add_column :blocks, :workspace_id, :uuid, null: false, index: true
    add_column :pages, :workspace_id, :uuid, null: false, index: true
  end
end
