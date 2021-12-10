# == Schema Information
#
# Table name: blocks
#
#  id                :uuid             not null, primary key
#  user_id           :uuid             not null
#  page_id           :uuid             not null
#  block_type        :string           default("paragraph"), not null
#  text              :text             default("")
#  image_url         :string           default("")
#  image_caption     :string           default("")
#  checked           :boolean          default(FALSE)
#  expanded          :boolean          default(FALSE)
#  toggle_inner_text :string           default("")
#  link_page_id      :string           default("")
#  format            :jsonb
#  icon              :jsonb
#  order_index       :integer          default(0)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
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
