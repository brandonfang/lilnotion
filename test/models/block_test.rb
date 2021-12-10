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
require 'test_helper'

class BlockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
