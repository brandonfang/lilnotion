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
class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :workspace
end
