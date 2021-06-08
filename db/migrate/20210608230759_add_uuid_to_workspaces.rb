class AddUuidToWorkspaces < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :uuid, :uuid, default: "gen_random_uuid()", null: false
    rename_column :workspaces, :id, :integer_id
    rename_column :workspaces, :uuid, :id
    execute "ALTER TABLE workspaces drop constraint workspaces_pkey;"
    execute "ALTER TABLE workspaces ADD PRIMARY KEY (id);"
  end
end
