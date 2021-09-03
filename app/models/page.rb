# == Schema Information
#
# Table name: pages
#
#  id         :uuid             not null, primary key
#  object     :string           default("page"), not null
#  parent     :json             not null
#  properties :json
#  children   :json             is an Array
#  archived   :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid
#
class Page < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_one_attached :cover

  has_many :blocks
end
