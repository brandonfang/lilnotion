@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :user_id, :page_id, :block_type, :text, :checked, :expanded
    json.image url_for(block.image) if (block.image.attached?)
  end
end