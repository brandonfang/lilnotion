class RemoveWorkspacesTypeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :workspaces, :type
  end
end
