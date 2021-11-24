@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :user_id, :page_id, :block_type, :text, :image, :checked, :expanded
  end
end