# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_10_115758) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "blocks", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.uuid "page_id", null: false
    t.string "block_type", default: "paragraph", null: false
    t.text "text", default: ""
    t.string "image_url", default: ""
    t.string "image_caption", default: ""
    t.boolean "checked", default: false
    t.boolean "expanded", default: false
    t.string "toggle_inner_text", default: ""
    t.string "link_page_id", default: ""
    t.jsonb "format", default: {}
    t.jsonb "icon", default: {}
    t.integer "order_index", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["block_type"], name: "index_blocks_on_block_type"
    t.index ["checked"], name: "index_blocks_on_checked"
    t.index ["created_at"], name: "index_blocks_on_created_at"
    t.index ["expanded"], name: "index_blocks_on_expanded"
    t.index ["format"], name: "index_blocks_on_format"
    t.index ["icon"], name: "index_blocks_on_icon"
    t.index ["image_caption"], name: "index_blocks_on_image_caption"
    t.index ["image_url"], name: "index_blocks_on_image_url"
    t.index ["link_page_id"], name: "index_blocks_on_link_page_id"
    t.index ["order_index"], name: "index_blocks_on_order_index"
    t.index ["page_id"], name: "index_blocks_on_page_id"
    t.index ["text"], name: "index_blocks_on_text"
    t.index ["toggle_inner_text"], name: "index_blocks_on_toggle_inner_text"
    t.index ["updated_at"], name: "index_blocks_on_updated_at"
    t.index ["user_id"], name: "index_blocks_on_user_id"
  end

  create_table "pages", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id", null: false
    t.string "title", default: ""
    t.string "block_ids", default: [], array: true
    t.string "gallery_image_url", default: ""
    t.string "uploaded_image_url", default: ""
    t.jsonb "icon", default: {}
    t.jsonb "style", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["block_ids"], name: "index_pages_on_block_ids"
    t.index ["title"], name: "index_pages_on_title"
    t.index ["user_id"], name: "index_pages_on_user_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["first_name", "last_name"], name: "index_users_on_first_name_and_last_name"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
