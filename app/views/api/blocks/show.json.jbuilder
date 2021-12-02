json.extract! @block, :id, :user_id, :page_id, :block_type, :text, :checked, :expanded, :image
json.image url_for(@block.photo) if (@block.photo.attached?)