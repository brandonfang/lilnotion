class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email, null: false, unique: true, index: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true, index: true
      t.timestamps
    end

    add_index :users, [:first_name, :last_name]
  end
end
