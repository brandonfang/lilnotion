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
    # debugger
     # Check to see if block_ids are changing
    if @page.block_ids != page_params[:block_ids]
      p "block_ids conditional"
      # This method forces Active Record to recognize a change is coming
      @page.block_ids_will_change!
      # Find number of block_ids
      num_blocks = @page.block_ids.length
      # Pop all previous block_ids from @page
      num_blocks.times { @page.block_ids.pop }
      # Re-add all new block_ids
      # debugger
      page_params[:block_ids].each do |block_id|
        p 'shoveling a block id of ' + block_id
        @page.block_ids << block_id
        # debugger
      end
      # p "a", @page.block_ids
      # debugger
      if @page.save!
        # p 'controller updated and saved page'
        # p "b", @page.block_ids
        # debugger
        render :show
        # debugger
        # p "c", @page.block_ids
      else 
        render json: @page.errors.full_messages, status: 422
      end
    else
      if @page.update(page_params)
        render :show
      else
        render json: @page.errors.full_messages, status: 422
      end
    end
    
    # if @page.update(page_params)
    #   render :show
    # else
    #   render json: @page.errors.full_messages, status: 422
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

  def format(hash)
    output = Hash.new
    hash.each do |key, value|
      output[key] = value
    end
    output
  end

  def page_params
    params[:page][:block_ids] = [] if params[:page][:block_ids] == nil
    params.require(:page).permit(:id, :user_id, :title, :gallery_image_url, :uploaded_image_url, :style, :created_at, :updated_at, :block_ids => [], :icon => [:id, :name, :colons, :text, :unified, :skin, :native, :custom, :image_url, :short_names => [], :emoticons => [], ])
  end
end
