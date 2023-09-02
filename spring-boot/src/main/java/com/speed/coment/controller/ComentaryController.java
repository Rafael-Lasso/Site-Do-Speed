package com.speed.coment.controller;

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

import com.speed.coment.model.Comentary;
import com.speed.coment.repository.ComentaryRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class ComentaryController {

	@Autowired
	ComentaryRepository repository;
	
	@GetMapping("comentary")
	@ResponseStatus(HttpStatus.OK)
	public List<Comentary> listAllComentary(){
		return repository.findAll();
	}
	
	@GetMapping("comentary/{id}")
	@ResponseStatus(HttpStatus.FOUND)
	public Comentary findComentaryById(@PathVariable Long id){
		return repository.findById(id).get();
	}
	
	@PostMapping("comentary")
	@ResponseStatus(HttpStatus.CREATED)
	public Comentary newComentary(@RequestBody Comentary comentary) {
		return repository.save(comentary);
	}
	
	@PutMapping("comentary/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Comentary editComentary(@PathVariable Long id, @RequestBody Comentary comentary) {
		return repository.save(comentary);
	}
	
	@DeleteMapping("comentary/{id}")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public void deleteComentary(@PathVariable Long id) {
		repository.deleteById(id);
	}

}
