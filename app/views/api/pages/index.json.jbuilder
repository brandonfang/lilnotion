@pages.each do |page|
  # if @page.cover.attached?
  #   coverUrl = url_for(@page.cover)
  # else
  #   coverUrl = nil
  # end

  json.set! page.id do
    json.extract! page, :id, :user_id, :parent, :properties, :created_at, :updated_at
    json.coverUrl page.cover.attached? ? url_for(page.cover) : ''
  end
end