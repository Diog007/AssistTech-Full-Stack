package com.diogo.assistech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diogo.assistech.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

}
