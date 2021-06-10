# == Schema Information
#
# Table name: blocks
#
#  id           :uuid             not null, primary key
#  object       :string           default("block"), not null
#  block_type   :string           not null
#  properties   :json             not null
#  format       :json
#  content      :uuid             default([]), is an Array
#  parent       :uuid
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  workspace_id :uuid             not null
#
class Block < ApplicationRecord
  belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: :Workspace
  
  # has_one :parent_block,
  #   foreign_key: :parent,
  #   class_name: :Block

end
