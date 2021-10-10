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
#  block_ids          :string           default([]), is an Array
#  gallery_image_url  :string           default("")
#
require 'test_helper'

class PageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
