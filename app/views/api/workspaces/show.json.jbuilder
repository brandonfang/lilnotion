json.extract! @workspace, :id, :name, :creator_id, :domain, :icon_string, :has_image
json.set! :page do 
  json.extract! @page, :id, :workspace_id, :object, :parent, :properties, :archived, :created_at, :updated_at
end
