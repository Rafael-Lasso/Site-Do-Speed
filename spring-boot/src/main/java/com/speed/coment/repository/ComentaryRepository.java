package com.speed.coment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speed.coment.model.Comentary;

@Repository
public interface ComentaryRepository extends JpaRepository<Comentary, Long> {

}
