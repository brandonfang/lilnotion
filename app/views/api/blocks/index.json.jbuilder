@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :user_id, :page_id, :block_type, :image, :text, :checked, :expanded
    if (block.photo.attached?)
      json.image url_for(block.photo)
    end
  end
end