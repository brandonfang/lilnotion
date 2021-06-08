# == Schema Information
#
# Table name: memberships
#
#  id           :uuid             not null, primary key
#  workspace_id :uuid             not null
#  user_id      :uuid             not null
#  role         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class MembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
