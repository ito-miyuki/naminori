class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: { message: "ログイン成功", user: resource }, status: :ok
  end

  def respond_to_on_destroy
    if current_user
      render json: { message: "ログアウト成功" }, status: :ok
    else
      render json: { message: "ログインしていません" }, status: :unauthorized
    end
  end
end
