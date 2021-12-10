class AddMoreIndices < ActiveRecord::Migration[5.2]
  def change
    add_index :blocks, :image_caption
    add_index :blocks, :checked
    add_index :blocks, :expanded
    add_index :blocks, :toggle_inner_text
    add_index :blocks, :link_page_id
    add_index :blocks, :format
    add_index :blocks, :icon
    add_index :blocks, :order_index
    add_index :blocks, :created_at
    add_index :blocks, :updated_at

    change_column :pages, :icon, :jsonb
    change_column :pages, :style, :jsonb
  end
end
