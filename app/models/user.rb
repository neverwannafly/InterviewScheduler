class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true
  belongs_to :role
  has_many :user_interviews, dependent: :delete_all
  has_one_attached :resume
end
