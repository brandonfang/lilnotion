class UpdatePageAndBlock < ActiveRecord::Migration[5.2]
  def change
    remove_column :blocks, :object
    remove_column :blocks, :content
    remove_column :blocks, :parent
    remove_column :blocks, :properties

    change_column :blocks, :block_type, :string, :default => 'paragraph', null: false

    add_column :blocks, :text, :string, :default => ''
    add_column :blocks, :image_url, :string, :default => ''
    
    add_column :blocks, :list_index, :integer, :default => 1
    add_column :blocks, :checked, :boolean, :default => false
    add_column :blocks, :expanded, :boolean, :default => true
    add_column :blocks, :link_page_id, :string, :default => ''
    add_column :blocks, :icon, :string, :default => ''

    remove_column :pages, :object
    remove_column :pages, :parent
    remove_column :pages, :properties
    remove_column :pages, :children
    remove_column :pages, :archived

    add_column :pages, :title, :string, :default => ''
    add_column :pages, :icon, :string, :default => ''
    add_column :pages, :image_url, :string, :default => ''
    add_column :pages, :style, :json, :default => {}
    add_column :pages, :block_ids, :string, array: true, :default => []
  end
end
