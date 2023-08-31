package com.speed.coment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class CommentaryController {
	
	@Autowired
	private CommentaryRepository repository;
	
	@GetMapping("/teste")
	public String SayHello() {
		return "Hello :)";
	}
	
	@GetMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public List<Commentary> GetAllCommentary() {
		return repository.findAll();
	}
	
	@GetMapping("/comment/{id}")
	public Commentary FindComentaryById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	@PostMapping("/")
	@ResponseStatus(HttpStatus.CREATED)
	public Commentary SaveCommentary(@RequestBody Commentary commentary) {
		return repository.save(commentary);
	}
	
	@PutMapping("comment/{id}")
	public Commentary EditCommentary(@PathVariable Long id, @RequestBody Commentary commentary) {
		return repository.save(commentary);
	}
	
	@DeleteMapping("comment/{id}")
	public void DeleteCommentary(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}
