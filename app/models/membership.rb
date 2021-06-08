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
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: :Workspace
end
