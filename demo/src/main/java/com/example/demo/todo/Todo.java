package com.example.demo.todo;

import java.util.Date;

public class Todo {
	private long id;
	private String username;
	private String description;
	private Date dateCompleted;
	private boolean isDone;

	public Todo(long id, String username, String description, Date dateCompleted, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.dateCompleted = dateCompleted;
		this.isDone = isDone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDateCompleted() {
		return dateCompleted;
	}

	public void setDateCompleted(Date dateCompleted) {
		this.dateCompleted = dateCompleted;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

}