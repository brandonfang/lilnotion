@pages.each do |page|
  json.set! page.id do
    json.extract! page, :id, :user_id, :title, :block_ids, :image_url
    # json.coverUrl page.cover.attached? ? url_for(page.cover) : ''
  end
end