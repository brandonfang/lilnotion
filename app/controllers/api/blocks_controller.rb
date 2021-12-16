class Api::BlocksController < ApplicationController

  def index
    @blocks = Block.where(user_id: params[:user_id])
    if @blocks
      render :index
    else 
      render json: @blocks.errors.full_messages, status: 422
    end
  end

  def create
    @block = Block.new(block_params)
    if @block.save
      render :show
    else 
      render json: @block.errors.full_messages, status: 422
    end
  end

  def show
    @block = Block.find_by(id: params[:id])
    render :show
  end
  
  def update
    @block = Block.find_by(id: params[:id])

    # check for image file and manually attach
    # do not allow attachment if image already exists
    image = params[:block][:image_url]
    if image && image != '' && !@block.photo.attached?
      p image
      p image.path
      p image.original_filename
      @block.photo.attach(io: File.open(image.path), filename: image.original_filename)
    end

    if @block.update(block_params)
      render :show
    else 
      render json: @block.errors.full_messages, status: 422
    end
  end

  def destroy
    block = Block.find_by(id: params[:id])
    if block
      block.destroy
    else
      render json: {:error => "Not found"}.to_json, status: 404
    end
  end

  private

  def block_params
    params.require(:block).permit(:id, :user_id, :page_id, :block_type, :text, :image_url, :image_caption, :checked, :expanded, :toggle_inner_text, :link_page_id,:order_index, :created_at, :updated_at, :format => [:color, :background_color], :icon => [:id, :name, :colons, :text, :unified, :skin, :native, :custom, :image_url, :short_names => [], :emoticons => [], ])
  end
end
