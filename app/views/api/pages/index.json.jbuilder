@pages.each do |page|
  json.set! page.id do
    json.extract! page, :id, :user_id, :title, :block_ids, :created_at, :updated_at, :gallery_image_url, :uploaded_image_url
    # json.uploaded_image_url url_for(@page.cover) if (@page.cover.attached?)
  end
end