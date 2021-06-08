class Api::WorkspacesController < ApplicationController
  
  def create 
    @workspace = Workspace.new(workspace_params)
    if @workspace.save
      render :show
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def show 
    @workspace = Workspace.find_by(params[:id])
    render :show
  end

  def update
    @workspace = Workspace.find_by(params[:id])
    current_user_admin_membership = Membership.find_by(
      workspace_id: params[:id], 
      user_id: current_user.id,
      role: "admin"
    )
    if current_user_admin_membership
      if @workspace.update(workspace_params)
        render :show
      else
        render json: @workspace.errors.full_messages, status: 422
      end
    end
  end

  private

  def workspace_params
    params.require(:workspace).permit(:type, :domain, :name, :icon_string, :creator_id)
  end
end
