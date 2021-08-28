class DropTableWorkspaceAndMembership < ActiveRecord::Migration[5.2]
  def change
    drop_table :workspaces
    drop_table :memberships
  end
end
