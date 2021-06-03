class Workspace < ApplicationRecord
  after_create :set_name_default
  after_create :set_domain_default
  after_create :set_icon_string_default

  has_one_attached :icon
  

  private

  def set_name_default
    user = User.find_by(id: self.creator_id)
    first_name = user.first_name
    self.name = first_name + "'s lilNotion"
  end

  def set_domain_default
    self.domain = self.id.to_s
  end

  def set_icon_string_default
    user = User.find_by(id: self.creator_id)
    first_letter = user.first_name[0]
    self.icon = first_letter
  end
end
