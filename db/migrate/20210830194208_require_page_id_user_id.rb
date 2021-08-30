class RequirePageIdUserId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :blocks, :page_id, false
    change_column_null :pages, :user_id, false
  end
end
