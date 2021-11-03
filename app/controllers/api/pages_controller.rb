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
    if @page.update(page_params)
      # debugger
      render :show
    else 
      render json: @page.errors.full_messages, status: 422
    end
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
    params.require(:page).permit(:id, :user_id, :title, :gallery_image_url, :uploaded_image_url, :icon, :style, :created_at, :updated_at, :block_ids)
  end
end
