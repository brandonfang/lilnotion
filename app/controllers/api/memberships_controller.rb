class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
    # if Workspace.find_by(id: @membership.workspace_id)
    #   current_user_admin_membership = Membership.find_by(
    #     workspace_id: @membership.workspace_id, 
    #     user_id: current_user.id,
    #     role: "admin"
    #   )
    #   if current_user_admin_membership && @membership.save
    #     render :show
    #   else
    #     render json: @membership.errors.full_messages, status: 422
    #   end
    # else
    #   if @membership.save
    #     render :show
    #   else 
    #     render json: @membership.errors.full_messages, status: 422
    #   end
    # end
  end

  def show
    @membership = Membership.find_by(id: params[:id])
    render :show
  end

  def update
    @membership = Membership.find_by(id: params[:id])
    current_user_admin_membership = Membership.find_by(
      workspace_id: @membership.workspace_id, 
      user_id: current_user.id,
      role: "admin"
    )
    if current_user_admin_membership
      if @membership.update(membership_params)
        render :show
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    membership = Membership.find_by(id: params[:id])
    current_user_admin_membership = Membership.find_by(
      workspace_id: membership.workspace_id, 
      user_id: current_user.id,
      role: "admin"
    )
    if current_user_admin_membership
      membership.destroy
    end
  end

  private 

  def membership_params
    params.require(:membership).permit(:workspace_id, :user_id, :role)
  end
end
