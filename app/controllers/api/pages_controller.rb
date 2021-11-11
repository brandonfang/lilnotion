class Api::PagesController < ApplicationController

  def index 
    @pages = current_user.pages
    render :index
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render :show
    else 
      render json: @page.errors.full_messages, status: 422
      return
    end
  end

  def show
    @page = Page.find_by(id: params[:id])
    if @page
      render :show
    else 
      render json: {:error => "Not-found"}.to_json, status: 404
    end
  end
  
  def update
    @page = Page.find_by(id: params[:id])
    # Check to see if block_ids are changing
    # if @page.block_ids != page_params[:block_ids]
    #   # This method forces ActiveRecord to recognize a change is coming
    #   @page.block_ids_will_change!
    #   # Find number of block_ids
    #   num_blocks = @page.block_ids.length
    #   # Pop all previous block_ids from @page
    #   num_blocks.times { @page.block_ids.pop }
    #   # Re-add all new block_ids
    #   page_params[:block_ids].each do |block_id|
    #     @page.block_ids << block_id
    #   end
    #   # p @page.block_ids
    #   if @page.save!
    #     p 'controller saved page'
    #     render :show
    #   else 
    #     render json: @page.errors.full_messages, status: 422
    #   end
    # else
      if @page.update(page_params)
        render :show
      else
        render json: @page.errors.full_messages, status: 422
      end
    # end
  end

  def destroy
    page = Page.find_by(id: params[:id])
    if page
      page.destroy
    else 
      render json: {:error => "Not-found"}.to_json, status: 404
    end
  end

  private

  def page_params
    params[:page][:block_ids] = [] if params[:page][:block_ids] == nil
    params.require(:page).permit(:id, :user_id, :title, :gallery_image_url, :uploaded_image_url, :icon, :style, :created_at, :updated_at, :block_ids: [])
  end
end
