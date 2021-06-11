class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks, id: :uuid do |t|
      t.string :object, default: "block", null: false, index: true
      t.string :block_type, null: false, index: true
      t.json :properties, null: false, default: {}
      t.json :format, default: {}
      t.uuid :content, array: true, default: [], index: true
      t.uuid :parent, index: true
      t.timestamps
    end
  end
end
