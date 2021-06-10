@pages.each do |page|
  json.extract! page, :id, :title, :properties
end