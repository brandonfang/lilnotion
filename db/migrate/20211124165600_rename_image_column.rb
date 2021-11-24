class RenameImageColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :blocks, :image_url, :image
  end
end
