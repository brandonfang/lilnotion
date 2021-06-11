class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages, id: :uuid do |t|
      t.string :object, default: "page", null: false, index: true
      t.json :parent, null: false, default: {}
      t.json :properties, default: {}
      t.json :children, array: true, default: []
      t.boolean :archived, default: false
      t.timestamps
    end
  end
end
