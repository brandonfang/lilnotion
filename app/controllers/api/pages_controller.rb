class Api::PagesController < ApplicationController

  def index 
    render :index
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render :show
    else 
      render json: @page.errors.full_messages, status: 422
    end
  end

  def show
    @page = Page.find_by(id: params[:id])
    render :show
  end
  
  def update
    @page = Page.find_by(id: params[:id])
    if @page.update(page_params)
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
    params.require(:page).permit(:id, :object, :parent, :properties, :children, :archived, :created_at, :updated_at)
  end
end
