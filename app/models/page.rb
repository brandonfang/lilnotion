# == Schema Information
#
# Table name: pages
#
#  id                 :uuid             not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  user_id            :uuid             not null
#  title              :string           default("")
#  icon               :string           default("")
#  uploaded_image_url :string           default("")
#  style              :json
#  gallery_image_url  :string           default("")
#  block_ids          :string           default([]), is an Array
#
class Page < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_one_attached :cover

  has_many :blocks
end
