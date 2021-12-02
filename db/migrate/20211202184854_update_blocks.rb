class UpdateBlocks < ActiveRecord::Migration[5.2]
  def change
    change_column_null :blocks, :image, false
    rename_column :blocks, :image, :image_url
  end
end
