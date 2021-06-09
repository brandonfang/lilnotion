# == Schema Information
#
# Table name: workspaces
#
#  name        :string
#  creator_id  :uuid
#  domain      :string
#  icon_string :string
#  has_image   :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  id          :uuid             not null, primary key
#
require 'test_helper'

class WorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
