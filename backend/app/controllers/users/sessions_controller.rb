class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private
  
  def respond_with(resource, _opts = {})
    if resource.present? && resource.persisted?
        render json: {
        message: "ログイン成功",
        user: {
            id: resource.id,
            email: resource.email,
            name: resource.name
        }
        }, status: :ok
    else
        render json: { message: "ログイン失敗" }, status: :unauthorized
    end
    end

  def respond_to_on_destroy
    if current_user
      render json: { message: "ログアウト成功" }, status: :ok
    else
      render json: { message: "ログインしていません" }, status: :unauthorized
    end
  end
end
