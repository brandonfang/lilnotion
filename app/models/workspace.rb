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
class Workspace < ApplicationRecord
  validates :name, presence: true
  validates :domain, presence: true, uniqueness: true
  validates :creator_id, presence: true

  has_one_attached :icon
  
  has_many :users,
    through: :memberships,
    source: :user

  has_one :creator,
    foreign_key: :creator_id,
    class_name: :User

end
