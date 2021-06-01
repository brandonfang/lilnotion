class EnableUuid < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'pgcrypto'
  end
end
