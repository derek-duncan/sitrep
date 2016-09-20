defmodule Sitrep.Router do
  use Sitrep.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Sitrep do
    pipe_through :api # Use the default browser stack

    resources "/teams", TeamController, except: [:new, :edit] do
      resources "/members", Team.MemberController, except: [:new, :edit]
    end

    resources "/members", MemberController, only: [:index, :show] do
      resources "/status-messages", StatusMessageController, except: [:new, :edit]
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", Sitrep do
  #   pipe_through :api
  # end
end
