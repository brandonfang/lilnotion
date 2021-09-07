json.extract! @page, :id, :user_id, :parent, :properties, :created_at, :updated_at
json.coverUrl @page.cover.attached? ? url_for(page.cover) : ''
