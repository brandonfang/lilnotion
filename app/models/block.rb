# == Schema Information
#
# Table name: blocks
#
#  id           :uuid             not null, primary key
#  block_type   :string           default("paragraph"), not null
#  format       :json
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  page_id      :uuid             not null
#  text         :string           default("")
#  image        :string           default("")
#  list_index   :integer          default(1)
#  checked      :boolean          default(FALSE)
#  expanded     :boolean          default(TRUE)
#  link_page_id :string           default("")
#  icon         :string           default("")
#  user_id      :uuid             not null
#
class Block < ApplicationRecord
  belongs_to :user,
    optional: true,
    foreign_key: :user,
    class_name: :User

  belongs_to :page,
    optional: true,
    foreign_key: :page_id,
    class_name: :Page

  has_one_attached :photo

end
