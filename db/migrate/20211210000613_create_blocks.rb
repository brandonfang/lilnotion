class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks, id: :uuid do |t|
      t.uuid :user_id, null: false, index: true
      t.uuid :page_id, null: false, index: true
      t.string :block_type, default: 'paragraph', null: false, index: true
      t.text :text, default: '', index: true
      t.string :image_url, default: '', index: true
      t.string :image_caption, default: ''
      t.boolean :checked, default: false
      t.boolean :expanded, default: false
      t.string :toggle_inner_text, default: ''
      t.string :link_page_id, default: ''
      t.jsonb :format, default: {}
      t.jsonb :icon, default: {}
      t.integer :order_index, default: 0
      t.timestamps
    end
  end
end
