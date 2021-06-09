class Api::PagesController < ApplicationController
  def create
  end

  def show
  end
  
  def update
  end

  def destroy
  end

  private

  def page_params
    params.require(:block).permit(:id, )
  end
end
