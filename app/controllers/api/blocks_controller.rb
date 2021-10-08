class Api::BlocksController < ApplicationController

  def index
    @blocks = Block.where(page_id: params[:page_id])
    @page_id = params[:page_id]
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
    # if @block
    #   render :show
    # else 
    #   render json: @block.errors.full_messages, status: 422
    # end
  end
  
  def update
    @block = Block.find_by(id: params[:id])
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
    params.require(:block).permit(:id, :page_id, :block_type, :text, :image_url, :checked, :expanded, :list_index, :link_page_id, :icon, :format, :created_at, :updated_at)
  end
end
