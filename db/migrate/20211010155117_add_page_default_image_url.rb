class AddPageDefaultImageUrl < ActiveRecord::Migration[5.2]
  def change
    rename_column :pages, :image_url, :uploaded_image_url
    add_column :pages, :gallery_image_url, :string, :default => ''
  end
end
