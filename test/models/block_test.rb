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
#  image_url    :string           default(""), not null
#  list_index   :integer          default(1)
#  checked      :boolean          default(FALSE)
#  expanded     :boolean          default(TRUE)
#  link_page_id :string           default("")
#  icon         :string           default("")
#  user_id      :uuid             not null
#
require 'test_helper'

class BlockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
