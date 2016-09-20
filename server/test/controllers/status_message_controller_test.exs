defmodule Sitrep.StatusMessageControllerTest do
  use Sitrep.ConnCase

  alias Sitrep.StatusMessage
  @valid_attrs %{message: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, status_message_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    status_message = Repo.insert! %StatusMessage{}
    conn = get conn, status_message_path(conn, :show, status_message)
    assert json_response(conn, 200)["data"] == %{"id" => status_message.id,
      "message" => status_message.message,
      "member_id" => status_message.member_id}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, status_message_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, status_message_path(conn, :create), status_message: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(StatusMessage, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, status_message_path(conn, :create), status_message: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    status_message = Repo.insert! %StatusMessage{}
    conn = put conn, status_message_path(conn, :update, status_message), status_message: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(StatusMessage, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    status_message = Repo.insert! %StatusMessage{}
    conn = put conn, status_message_path(conn, :update, status_message), status_message: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    status_message = Repo.insert! %StatusMessage{}
    conn = delete conn, status_message_path(conn, :delete, status_message)
    assert response(conn, 204)
    refute Repo.get(StatusMessage, status_message.id)
  end
end
