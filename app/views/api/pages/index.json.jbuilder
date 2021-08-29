@pages.each do |page|
  json.extract! page, :id,  :object, :parent, :properties, :archived, :created_at, :updated_at
end