defmodule Sitrep.StatusMessageView do
  use Sitrep.Web, :view

  def render("index.json", %{status_messages: status_messages}) do
    %{data: render_many(status_messages, Sitrep.StatusMessageView, "status_message.json")}
  end

  def render("show.json", %{status_message: status_message}) do
    %{data: render_one(status_message, Sitrep.StatusMessageView, "status_message.json")}
  end

  def render("status_message.json", %{status_message: status_message}) do
    %{id: status_message.id,
      message: status_message.message,
      member_id: status_message.member_id,
      inserted_at: status_message.inserted_at,
      updated_at: status_message.updated_at}
  end
end
