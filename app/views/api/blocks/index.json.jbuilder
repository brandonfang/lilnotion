@blocks.each do |block|
  json.set! block.id do
    json.extract! block, :id, :object, :block_type, :properties, :format, :content, :parent, :created_at, :updated_at
  end
end