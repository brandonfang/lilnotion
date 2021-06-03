class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :name
      t.uuid :user_id
      t.string :domain, unique: true, index: true
      t.string :type
      t.string :icon_string
      t.boolean :has_image, :default => false
      t.timestamps
    end
  end
end
