@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :page_id, :block_type, :text, :image_url, :checked
  end
end