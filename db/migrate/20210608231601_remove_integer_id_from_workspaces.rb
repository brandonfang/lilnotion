class RemoveIntegerIdFromWorkspaces < ActiveRecord::Migration[5.2]
  def change
    remove_column :workspaces, :integer_id
  end
end
