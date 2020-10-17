package com.example.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;

	//initial list of todos
	static {
		todos.add(new Todo(++idCounter, "joel", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "joel", "Learn Java", new Date(), false));
		todos.add(new Todo(++idCounter, "joel", "Learn .NET", new Date(), false));
	}

	//Gets the list of all todo tasks
	public List<Todo> findAll() {
		return todos;
	}

	//Updates a todo task by deleting it and
	//creating a new one. Shortcut, probably not ideal?
	public Todo save(Todo todo) {
		if(todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	//Deletes a specific todo task by its id
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	//Gets specific todo task
	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
