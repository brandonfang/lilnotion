json.extract! @block, :id, :page_id, :block_type, :text, :checked
json.image url_for(@block.photo)