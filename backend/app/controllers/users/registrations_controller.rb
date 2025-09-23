class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    if resource.persisted?
      sign_up(resource_name, resource)
      render json: { message: "登録成功", user: resource }, status: :created
    else
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:name, :phone, :birthdate, :gender, :prefecture, :email, :password, :password_confirmation)
  end
end
