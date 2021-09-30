json.extract! @page, :id, :user_id, :properties
json.properties do
  json.title properties.title
end
json.coverUrl @page.cover.attached? ? url_for(page.cover) : ''
