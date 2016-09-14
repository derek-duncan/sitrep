defmodule Sitrep.PageController do
  use Sitrep.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
