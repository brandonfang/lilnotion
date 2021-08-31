@pages.each do |page|
  json.set! page.id do
    json.extract! page, :id, :object, :parent, :properties, :archived, :created_at, :updated_at
  end
end