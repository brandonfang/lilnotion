# == Schema Information
#
# Table name: blocks
#
#  id         :uuid             not null, primary key
#  object     :string           default("block"), not null
#  block_type :string           not null
#  properties :json             not null
#  format     :json
#  content    :uuid             default([]), is an Array
#  parent     :uuid
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class BlockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end