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
#  page_id    :uuid
#
class Block < ApplicationRecord
  belongs_to :page,
    foreign_key: :page_id,
    class_name: :Page

end
