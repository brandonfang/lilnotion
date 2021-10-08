class AddIndices < ActiveRecord::Migration[5.2]
  def change
    add_index :blocks, :text
    add_index :blocks, :image_url

    add_index :pages, :title
    add_index :pages, :image_url
    add_index :pages, :block_ids
  end
end
