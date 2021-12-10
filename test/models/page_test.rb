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
require 'test_helper'

class PageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
