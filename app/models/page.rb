# == Schema Information
#
# Table name: pages
#
#  id                 :uuid             not null, primary key
#  user_id            :uuid             not null
#  title              :string           default("")
#  block_ids          :string           default([]), is an Array
#  gallery_image_url  :string           default("")
#  uploaded_image_url :string           default("")
#  icon               :json
#  style              :json
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Page < ApplicationRecord
  belongs_to :user, 
    optional: true,
    foreign_key: :user_id,
    class_name: :User

  has_one_attached :cover

  has_many :blocks
end
