class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages, id: :uuid do |t|
      t.uuid :user_id, null: false, index: true
      t.string :title, default: '', index: true
      t.string :block_ids, default: [], array: true, index: true
      t.string :gallery_image_url, default: ''
      t.string :uploaded_image_url, default: ''
      t.json :icon, default: {}
      t.json :style, default: {}
      t.timestamps
    end
  end
end
