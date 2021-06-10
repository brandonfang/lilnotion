# == Schema Information
#
# Table name: pages
#
#  id         :uuid             not null, primary key
#  object     :string           default("page"), not null
#  parent     :json             not null
#  properties :json
#  children   :json             is an Array
#  archived   :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Page < ApplicationRecord


  # parent json can either be database parent, page parent, or workspace parent
  # workspace parent means this is a top level page
  # page parent means this is a nested page
  # database parent means this is a "show page" for that 
  
  


end